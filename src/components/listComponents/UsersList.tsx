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
import { useUser } from "../../context/UserContext";

type User = {
  id: string;
  name: string;
};

const UsersList = () => {
  const { userValue } = useUser();

  return (
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
              {userValue.users &&
                userValue.users.map((u: User) => (
                  <Tr key={u.id}>
                    <Td>{u.name}</Td>
                  </Tr>
                ))}
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
  );
};

export default UsersList;
