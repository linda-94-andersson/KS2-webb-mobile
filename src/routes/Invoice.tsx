import React, { useState, useEffect } from "react";
import { FormControl, Button, Center, Box } from "@chakra-ui/react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import { addInvoice } from "../data/getInvoices";
import { v4 as uuid } from "uuid";
import { changeProject } from "../data/getProjects";
import Selected from "../components/invoiceComponents/Selected";
import Inputs from "../components/invoiceComponents/Inputs";
import { useProject } from "../context/ProjectContext";
import { useInvoice } from "../context/InvoiceContext";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const Invoice = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [inputRate, setInputRate] = useState(0);
  const [createDate, setCreateDate] = useState(Date.now);
  const [dueDate, setDueDate] = useState(Date.now);
  const [status, setStatus] = useState("Unpaid");
  const [inputCustomer, setInputCustomer] = useState("");
  const [sum, setSum] = useState<number>();

  const { getProjectData } = useProject();
  const { getInvoiceData } = useInvoice();

  const generated_id: string = uuid();

  function setDates() {
    if (!selectedTasks || !selectedProject) return;
    const createdDate = () => {
      setCreateDate(Date.now());
      return createDate;
    };
    createdDate();
    if (!createDate || !selectedTasks) return;
    const duedDate = () => {
      const sumDate = createDate + 2592000000;
      setDueDate(sumDate);
      return dueDate;
    };
    duedDate();
  }

  useEffect(() => {
    setDates();
  }, [selectedTasks]);

  const handleSubmit = async () => {
    if (
      !selectedProject ||
      !selectedTasks ||
      !sum ||
      !createDate ||
      !dueDate ||
      !inputCustomer
    )
      return;

    const PData = await changeProject(selectedProject, inputRate);

    await getProjectData();

    const IData = await addInvoice(
      generated_id,
      status,
      dueDate,
      sum,
      inputCustomer,
      createDate
    );

    await getInvoiceData();

    setCreateDate(Date.now);
    setDueDate(Date.now);
    setInputRate(0);
    setInputCustomer("");
    setSelectedTasks([]);
    setSelectedProject("");
  };

  return (
    <FormControl isRequired style={{ paddingBottom: 120 }}>
      <Selected
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        selectedTasks={selectedTasks}
        setSelectedTasks={setSelectedTasks}
        inputRate={inputRate}
        sum={sum}
        setSum={setSum}
      />
      <br />
      <Inputs
        setInputRate={setInputRate}
        inputCustomer={inputCustomer}
        setInputCustomer={setInputCustomer}
      />
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
        <Box>Sum: {sum}</Box>
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
