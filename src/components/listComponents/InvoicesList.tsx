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

const InvoicesList = () => {
  return (
    <AccordionItem>
      {" "}
      <h2>
        <AccordionButton _expanded={{ bg: "#4299E1", color: "white" }}>
          <Box flex="1" textAlign="left">
            Invoices
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {" "}
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Invoices</TableCaption>
            <Thead>
              <Tr>
                <Th>Customer</Th>
                <Th>Status</Th>
                <Th>Due date</Th>
                <Th>Sum</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>CUSTOMER NAME</Td>
                <Td>STATUS</Td>
                <Td>DUE DATE</Td>
                <Td>SUM</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Customer</Th>
                <Th>Status</Th>
                <Th>Due date</Th>
                <Th>Sum</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InvoicesList;
