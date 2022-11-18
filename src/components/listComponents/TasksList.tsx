import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useTask } from "../../context/TaskContext";
import { useProject } from "../../context/ProjectContext";

type Task = {
  id: string;
  name: string;
  projectId: string;
};

type Project = {
  id: string;
  name: string;
};

const TasksList = () => {
  const { taskValue } = useTask();
  const { projectValue } = useProject();

  return (
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: "#4299E1", color: "white" }}>
          <Box flex="1" textAlign="left">
            Tasks
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Tasks</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Project name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {taskValue.tasks &&
                taskValue.tasks.map((t: Task) => (
                  <Tr key={t.id}>
                    <Td>{t.name}</Td>
                    {projectValue.projects &&
                      projectValue.projects
                        .filter((p: Project) => p.id === t.projectId)
                        .map((p: Project) => <Td key={p.id}>{p.name}</Td>)}
                  </Tr>
                ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Name</Th>
                <Th>Project name</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default TasksList;
