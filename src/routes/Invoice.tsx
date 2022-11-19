import React, { useState, useEffect } from "react";
import {
  FormControl,
  Input,
  Button,
  Center,
  FormLabel,
  Select,
  Box,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useProject } from "../context/ProjectContext";
import { useTask } from "../context/TaskContext";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import { addInvoice, getInvoices } from "../data/getInvoices";
import { v4 as uuid } from "uuid";

type Project = {
  id: string;
  name: string;
  color: string;
  userId: string;
  hourly_rate?: number;
};

type Task = {
  id: string;
  name: string;
  projectId: string;
};

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

  const { projectValue } = useProject();
  const { taskValue } = useTask();

  const generated_id: string = uuid();

  const handleSelectedProject = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProject(e.target.value);
  };

  const handleSelectedTask = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTask(e.target.value);
  };

  const handleInputRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputRate(parseFloat(e.target.value));
  };

  const handleInputCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCustomer(e.target.value);
  };

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
    console.log("First!");
    if (
      !selectedProject ||
      !selectedTask ||
      !inputRate || //should be sum
      !createDate ||
      !dueDate ||
      !inputCustomer
    )
      return;

    console.log("Second!");

    const data = await addInvoice(
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
  };

  return (
    <FormControl isRequired>
      <FormLabel></FormLabel>
      <Select
        required
        name="projects"
        id="projects"
        value={selectedProject}
        onChange={handleSelectedProject}
      >
        <option value="">Pick a project</option>
        {projectValue.projects ? (
          projectValue.projects.map((p: Project) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))
        ) : (
          <option value="">No projects found</option>
        )}
      </Select>
      <br />
      {selectedProject.length !== 0 ? (
        <>
          <FormLabel></FormLabel>
          <Select
            required
            name="taks"
            id="tasks"
            value={selectedTask}
            onChange={handleSelectedTask}
          >
            <option value="">Pick a task</option>
            {taskValue.tasks ? (
              taskValue.tasks
                .filter((t: Task) => t.projectId === selectedProject)
                .map((t: Task) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))
            ) : (
              <option value="">No tasks found</option>
            )}
          </Select>
        </>
      ) : (
        <>
          <FormLabel></FormLabel>
          <Select>
            <option value="">Pick a project before a task</option>
          </Select>
        </>
      )}
      <br />
      <FormLabel></FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children="$"
        />
        <Input
          type="number"
          placeholder="Enter hourly rate"
          onChange={handleInputRate}
        />
      </InputGroup>
      <br />
      <FormLabel></FormLabel>
      <Input
        type="text"
        placeholder="Customer name"
        onChange={handleInputCustomer}
      />
      <br />
      <br />
      <Center>
        <Box>Invoice Date: {dayjs(createDate).format("YYYY-MM-DD")}</Box>
      </Center>
      <br />
      <Center>
        <Box>Due Date: {dayjs(dueDate).format("YYYY-MM-DD")}</Box>
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
