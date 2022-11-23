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
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import { useInvoice } from "../../context/InvoiceContext";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const InvoicesList = () => {
  const { invoiceValue } = useInvoice();

  return (
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: "#4299E1", color: "white" }}>
          <Box flex="1" textAlign="left">
            Invoices
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Invoices</TableCaption>
            <Thead>
              <Tr>
                <Th>Customer</Th>
                <Th>Status</Th>
                <Th>Due date</Th>
                <Th>Sum Kr</Th>
              </Tr>
            </Thead>
            <Tbody>
              {invoiceValue.invoices &&
                invoiceValue.invoices.map((i: Invoice) => (
                  <Tr key={i.id}>
                    <Td>{i.customer_name}</Td>
                    <Td>{i.status}</Td>
                    <Td>{dayjs(i.due_date).format("YYYY-MM-DD")}</Td>
                    <Td>{i.sum}</Td>
                  </Tr>
                ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Customer</Th>
                <Th>Status</Th>
                <Th>Due date</Th>
                <Th>Sum Kr</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InvoicesList;
