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
  Icon,
  Button,
} from "@chakra-ui/react";
import { useTimeLog } from "../../context/TimelogContext";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import { useTask } from "../../context/TaskContext";
import { MdOutlineColorLens } from "react-icons/md";
import { useProject } from "../../context/ProjectContext";
import { RiDeleteBack2Line } from "react-icons/ri";
import { deleteTimeLogs } from "../../data/getTimeLogs";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const TimelogsList = () => {
  const { timeLogValue, getTimeLogData } = useTimeLog();
  const { taskValue } = useTask();
  const { projectValue } = useProject();

  const handleDelete = async (id: string) => {
    const data = await deleteTimeLogs(id);
    await getTimeLogData();
  };

  return (
    <AccordionItem>
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
                <Th>
                  <Icon as={MdOutlineColorLens} w={25} h={25} />
                </Th>
                <Th>Stop time</Th>
              </Tr>
            </Thead>
            {timeLogValue.timeLogs &&
              timeLogValue.timeLogs.map((tl: Timelog) => (
                <Tbody key={tl.id}>
                  {taskValue.tasks &&
                    taskValue.tasks
                      .filter((t: Task) => t.id === tl.taskId)
                      .map((t: Task) => (
                        <Tr key={t.id}>
                          <Td>{t.name}</Td>
                          <Td>
                            {dayjs(tl.startTime).format("HH:mm:ss")}{" "}
                            <Button
                              variant="link"
                              onClick={() => handleDelete(tl.id)}
                            >
                              <Icon as={RiDeleteBack2Line} w={25} h={25} />
                            </Button>
                          </Td>
                          {projectValue.projects &&
                            projectValue.projects
                              .filter((p: Project) => p.id === t.projectId)
                              .map((p: Project) => (
                                <Td key={p.id}>
                                  <Icon
                                    as={MdOutlineColorLens}
                                    w={25}
                                    h={25}
                                    style={{
                                      backgroundColor: p.color,
                                    }}
                                  />
                                </Td>
                              ))}
                          <Td>{dayjs(tl.endTime).format("HH:mm:ss")}</Td>
                        </Tr>
                      ))}
                </Tbody>
              ))}
            <Tfoot>
              <Tr>
                <Th>Task name</Th>
                <Th>Start time</Th>
                <Th>
                  <Icon as={MdOutlineColorLens} w={25} h={25} />
                </Th>
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
