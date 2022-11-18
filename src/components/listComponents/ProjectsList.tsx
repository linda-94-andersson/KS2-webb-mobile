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
} from "@chakra-ui/react";
import { MdOutlineColorLens } from "react-icons/md";
import { useProject } from "../../context/ProjectContext";

type Project = {
  id: string;
  name: string;
  color: string;
};

const ProjectsList = () => {
  const { projectValue } = useProject();

  return (
    <AccordionItem>
      {" "}
      <h2>
        <AccordionButton _expanded={{ bg: "#4299E1", color: "white" }}>
          <Box flex="1" textAlign="left">
            Projects
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {" "}
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Projects</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>
                  <Icon as={MdOutlineColorLens} w={15} h={15} />
                </Th>
                <Th>Amount of tasks</Th>
              </Tr>
            </Thead>
            <Tbody>
              {projectValue.projects &&
                projectValue.projects.map((p: Project) => (
                  <Tr key={p.id}>
                    <Td>{p.name}</Td>
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
                    <Td>TASKS AMOUNT</Td>
                  </Tr>
                ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Name</Th>
                <Th>
                  <Icon as={MdOutlineColorLens} w={15} h={15} />
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
