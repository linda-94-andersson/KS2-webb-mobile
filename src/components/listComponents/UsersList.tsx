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
  Button,
  Icon,
} from "@chakra-ui/react";
import { useUser } from "../../context/UserContext";
import { RiDeleteBack2Line } from "react-icons/ri";
import { deleteUser } from "../../data/getUsers";
import { useProject } from "../../context/ProjectContext";
import { useTask } from "../../context/TaskContext";
import { useTimeLog } from "../../context/TimelogContext";

const UsersList = () => {
  const { userValue, getUserData } = useUser();
  const { getProjectData } = useProject();
  const { getTaskData } = useTask();
  const { getTimeLogData } = useTimeLog();

  const handleDelete = async (id: string) => {
    const data = await deleteUser(id);
    await getUserData();
    await getProjectData();
    await getTaskData();
    await getTimeLogData();
  };

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
                    <Td>
                      {u.name}
                      <Button variant="link" onClick={() => handleDelete(u.id)}>
                        <Icon as={RiDeleteBack2Line} w={25} h={25} />
                      </Button>
                    </Td>
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
