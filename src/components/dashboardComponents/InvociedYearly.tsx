import React from "react";
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
} from "@chakra-ui/react";
import { GrDrag } from "react-icons/gr";
import { useInvoice } from "../../context/InvoiceContext";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

const InvociedYearly = () => {
  const { invoiceValue } = useInvoice();

  const year =
    invoiceValue.invoices &&
    invoiceValue.invoices
      .filter((invoice) =>
        dayjs(invoice.created_date).isBetween(
          new Date().getFullYear(),
          Date.now()
        )
      )
      .map((invoice) => invoice.sum);

  const calc = () => {
    if (year === undefined) return;
    const sum =
      Math.round(
        year.reduce((acc, value) => {
          return acc + value;
        }, 0) * 100
      ) / 100;
    return sum;
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: "#4299E1", color: "white" }}>
          <Box flex="1" textAlign="left">
            <Box style={{ display: "flex" }}>
              {/* <Icon as={GrDrag} w={25} h={25} />{" "} */}
              <span>Invoiced {dayjs(Date.now()).format("YYYY")}</span>
            </Box>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Amount of invoiced in the last year</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>{calc ? <Td>{calc()} Kr</Td> : <Td>0</Td>}</Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </AccordionPanel>
      </h2>
    </AccordionItem>
  );
};

export default InvociedYearly;
