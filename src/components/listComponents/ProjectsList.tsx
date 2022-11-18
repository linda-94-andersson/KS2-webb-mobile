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
  Icon,
  Button,
} from "@chakra-ui/react";
import { MdOutlineColorLens } from "react-icons/md";
import { useProject } from "../../context/ProjectContext";
import { useTask } from "../../context/TaskContext";
import { RiDeleteBack2Line } from "react-icons/ri";
import { deleteProject } from "../../data/getProjects";
import { useTimeLog } from "../../context/TimelogContext";

type Project = {
  id: string;
  name: string;
  color: string;
};

type Task = {
  id: string;
  projectId: string;
};

const ProjectsList = () => {
  const { projectValue, getProjectData } = useProject();
  const { taskValue, getTaskData } = useTask();
  const { getTimeLogData } = useTimeLog();

  const handleDelete = async (id: string) => {
    const data = await deleteProject(id);
    await getProjectData();
    await getTaskData();
    await getTimeLogData();
  };

  function objectLength(obj: {}) {
    var result = 0;
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result++;
      }
    }
    return result;
  }

  return (
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: "#4299E1", color: "white" }}>
          <Box flex="1" textAlign="left">
            Projects
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Projects</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>
                  <Icon as={MdOutlineColorLens} w={25} h={25} />
                </Th>
                <Th>Amount of tasks</Th>
              </Tr>
            </Thead>
            <Tbody>
              {projectValue.projects &&
                projectValue.projects.map((p: Project) => (
                  <Tr key={p.id}>
                    <Td>
                      {p.name}
                      <Button variant="link" onClick={() => handleDelete(p.id)}>
                        <Icon as={RiDeleteBack2Line} w={25} h={25} />
                      </Button>
                    </Td>
                    <Td>
                      <Icon
                        as={MdOutlineColorLens}
                        w={25}
                        h={25}
                        style={{
                          backgroundColor: p.color,
                        }}
                      />
                    </Td>
                    {/* Work in progress, only show one number with amount of task in the project */}
                    {taskValue.tasks &&
                      taskValue.tasks
                        .filter((t: Task) => t.projectId === p.id)
                        .map((t: Task) => (
                          <Td key={t.id}>{objectLength(t) ? objectLength(t) : 0}</Td>
                        ))}
                  </Tr>
                ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Name</Th>
                <Th>
                  <Icon as={MdOutlineColorLens} w={25} h={25} />
                </Th>
                <Th>Amount of tasks</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default ProjectsList;
