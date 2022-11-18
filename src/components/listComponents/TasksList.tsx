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

const TasksList = () => {
  return (
    <AccordionItem>
      {" "}
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
              <Tr>
                <Td>TASKS NAME</Td>
                <Td>PROJECT NAME</Td>
              </Tr>
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
