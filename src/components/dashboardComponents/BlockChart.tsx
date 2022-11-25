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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { GrDrag } from "react-icons/gr";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useInvoice } from "../../context/InvoiceContext";

const BlockChart = () => {
  const { invoiceValue } = useInvoice();

  const data = [
    {
      date: 1,
      sum: 0,
    },
    {
      date: 2,
      sum: 100,
    },
    {
      date: 3,
      sum: 150,
    },
    {
      date: 4,
      sum: 100,
    },
    {
      date: 5,
      sum: 200,
    },
    {
      date: 6,
      sum: 300,
    },
    {
      date: 7,
      sum: 300,
    },
    {
      date: 8,
      sum: 50,
    },
    {
      date: 9,
      sum: 75,
    },
    {
      date: 10,
      sum: 275,
    },
    {
      date: 11,
      sum: 175,
    },
    {
      date: 12,
      sum: 300,
    },
  ];

  const renderBarChart = (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sum" fill="#8884d8" />
    </BarChart>
  );
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "#4299E1", color: "white" }}>
            <Box flex="1" textAlign="left">
              <Box style={{ display: "flex" }}>
                {/* <Icon as={GrDrag} w={25} h={25} />{" "} */}
                <span>Bar Chart</span>
              </Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Amount invoiced "year"</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{renderBarChart}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </h2>
      </AccordionItem>
    </>
  );
};

export default BlockChart;
