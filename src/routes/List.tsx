import React from "react";
import {
  Accordion,
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

const List = () => {
  return (
    <div>
      <Accordion defaultIndex={[0]} allowMultiple style={{ paddingBottom: 100 }}>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "#4299E1", color: "white" }}>
              <Box flex="1" textAlign="left">
                Users
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table variant="simple">
                <TableCaption>Users</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>USERS HERE</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Name</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
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
      </Accordion>
    </div>
  );
};

export default List;
