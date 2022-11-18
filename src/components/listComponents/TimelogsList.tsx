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

const TimelogsList = () => {
  return (
    <AccordionItem>
      {" "}
      <h2>
        <AccordionButton _expanded={{ bg: "#4299E1", color: "white" }}>
          <Box flex="1" textAlign="left">
            Timelogs
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Timelogs</TableCaption>
            <Thead>
              <Tr>
                <Th>Task name</Th>
                <Th>Start time</Th>
                <Th>Stop time</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>TASKS NAME</Td>
                <Td>START TIME</Td>
                <Td>STOP TIME</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Task name</Th>
                <Th>Start time</Th>
                <Th>Stop time</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default TimelogsList;
