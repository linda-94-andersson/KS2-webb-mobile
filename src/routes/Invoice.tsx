import React, { useState } from "react";
import {
  FormControl,
  Input,
  Button,
  Center,
  FormLabel,
  Select,
  Box,
} from "@chakra-ui/react";
import { useProject } from "../context/ProjectContext";
import { useTask } from "../context/TaskContext";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";

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
  const [inputRate, setInputRate] = useState(""); //should be number
  const [createDate, setCreateDate] = useState<number>();
  const [dueDate, setDueDate] = useState<number>();
  const [status, setStatus] = useState("Unpaid");
  const [inputCustomer, setInputCustomer] = useState("");

  const { projectValue } = useProject();
  const { taskValue } = useTask();

  const handleSelectedProject = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProject(e.target.value);
  };

  const handleSelectedTask = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTask(e.target.value);
    if (!selectedTask) return;
    const createdDate = () => {
      setCreateDate(Date.now());
      return createDate;
    };
    createdDate();
    if (!createDate) return;
    const duedDate = () => {
      const sumDate = createDate + 2592000000;
      console.log(sumDate); // remove later
      setDueDate(sumDate);
      return dueDate;
    };
    duedDate();
  };

  const handleInputRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputRate(e.target.value);
  };

  const handleInputCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCustomer(e.target.value);
  };

  const handleSubmit = async () => {
    //just for testing
    setCreateDate(0);
    setDueDate(0);

    // if (!input || !selectedUser) return;
    // if (
    //   projectValue.projects.find((p) => p.color === color.hex) &&
    //   projectValue.projects.find((p) => p.userId === selectedUser)
    // ) {
    //   return setValidColor(false);
    // }
    // const data = await addProject(generated_id, input, color.hex, selectedUser);
    // dispatch({
    //   type: "added",
    //   id: data.id,
    //   name: data.name,
    //   color: data.color,
    //   userId: data.userId,
    // });
    // await getProjectData();
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
      <FormLabel></FormLabel>
      <Input
        required
        type="text"
        name="hourly_rate"
        placeholder="Enter hourly rate"
        onChange={handleInputRate}
      />
      <br />
      <br />
      <FormLabel></FormLabel>
      <Input
        required
        type="text"
        name="customerName"
        placeholder="Customer name"
        onChange={handleInputCustomer}
      />
      <br />
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
