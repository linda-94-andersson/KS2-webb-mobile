import React, { useState, useEffect } from "react";
import { FormControl, Button, Center, Box } from "@chakra-ui/react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import { addInvoice, getInvoices } from "../data/getInvoices";
import { v4 as uuid } from "uuid";
import { changeProject, getProjects } from "../data/getProjects";
import Selected from "../components/invoiceComponents/Selected";
import Inputs from "../components/invoiceComponents/Inputs";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const Invoice = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedTask, setSelectedTask] = useState("");
  const [inputRate, setInputRate] = useState(0);
  const [createDate, setCreateDate] = useState(Date.now);
  const [dueDate, setDueDate] = useState(Date.now);
  const [status, setStatus] = useState("Unpaid");
  const [inputCustomer, setInputCustomer] = useState("");

  const generated_id: string = uuid();

  function setDates() {
    if (!selectedTask || !selectedProject) return;
    const createdDate = () => {
      setCreateDate(Date.now());
      return createDate;
    };
    createdDate();
    if (!createDate || !selectedTask) return;
    const duedDate = () => {
      const sumDate = createDate + 2592000000;
      setDueDate(sumDate);
      return dueDate;
    };
    duedDate();
  }

  useEffect(() => {
    setDates();
  }, [selectedTask]);

  const handleSubmit = async () => {
    if (
      !selectedProject ||
      !selectedTask ||
      !inputRate || //should be sum
      !createDate ||
      !dueDate ||
      !inputCustomer
    )
      return;

    const PData = await changeProject(selectedProject, inputRate);

    await getProjects();

    const IData = await addInvoice(
      generated_id,
      status,
      dueDate,
      inputRate, //should be sum
      inputCustomer,
      createDate
    );

    await getInvoices();

    setCreateDate(Date.now);
    setDueDate(Date.now);
    setInputRate(0);
    setInputCustomer("");
    setSelectedTask("");
    setSelectedProject("");
  };

  return (
    <FormControl isRequired>
      <Selected
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      />
      <br />
      <Inputs inputRate={inputRate} setInputRate={setInputRate} inputCustomer={inputCustomer} setInputCustomer={setInputCustomer} />
      <br />
      <Center>
        <Box>Invoice Date: {dayjs(createDate).format("YYYY-MM-DD")}</Box>
      </Center>
      <br />
      <Center>
        <Box>
          Due Date (30 days):{" "}
          {dayjs(createDate + 2592000000).format("YYYY-MM-DD")}
        </Box>
      </Center>
      <br />
      <Center>
        <Box>Invoice status: {status}</Box>
      </Center>
      <br />
      <Center>
        {/* Calculate sum here and add to state */}
        <Box>Sum: {inputRate}</Box>
      </Center>
      <br />
      <Center>
        <Box>Customer: {inputCustomer}</Box>
      </Center>
      <br />
      <Center>
        <Button
          type="submit"
          colorScheme="blue"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Add Invoice
        </Button>
      </Center>
    </FormControl>
  );
};

export default Invoice;
