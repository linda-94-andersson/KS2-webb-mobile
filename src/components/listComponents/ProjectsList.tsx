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

const ProjectsList = () => {
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
                <Th>Amount of tasks</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>PROJECTS NAME</Td>
                <Td>TASKS AMOUNT</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Name</Th>
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
