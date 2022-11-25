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
import { useTimeLog } from "../../context/TimelogContext";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

const TimelogAmount = () => {
  const { timeLogValue } = useTimeLog();

  const showDate = () => {
    const dateRange =
      timeLogValue.timeLogs &&
      timeLogValue.timeLogs
        .filter(
          (timelog) =>
            dayjs(timelog.startTime).isBetween(
              Date.now() - 2592000000,
              Date.now()
            ) ||
            dayjs(timelog.endTime).isBetween(
              Date.now() - 2592000000,
              Date.now()
            )
        )
        .map((timelog) => timelog)
        .reduce((sum, curr) => {
          return sum + (curr.endTime - curr.startTime);
        }, 0);

    if (dateRange === undefined) return;

    return dayjs.duration(dateRange).format("HH:mm:ss");
  };

  const logRange =
    timeLogValue.timeLogs &&
    timeLogValue.timeLogs.filter(
      (timelog) =>
        dayjs(timelog.startTime).isBetween(
          Date.now() - 2592000000,
          Date.now()
        ) ||
        dayjs(timelog.endTime).isBetween(Date.now() - 2592000000, Date.now())
    );

  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "#4299E1", color: "white" }}>
            <Box flex="1" textAlign="left">
              <Box style={{ display: "flex" }}>
                {/* <Icon as={GrDrag} w={25} h={25} />{" "} */}
                <span>
                  Timelogs {dayjs(Date.now() - 2592000000).format("YYYY-MM-DD")}{" "}
                  - {dayjs(Date.now()).format("YYYY-MM-DD")}
                </span>
              </Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Amount of timelogs</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Total tid: {showDate()}</Td>
                  </Tr>
                  {logRange?.map((log) => (
                    <Tr key={log.id}>
                      <Td>
                        {dayjs(log.startTime).format("YYYY-MM-DD,  HH:mm:ss")}
                      </Td>
                      <Td>-</Td>
                      <Td>{dayjs(log.endTime).format("HH:mm:ss")}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </h2>
      </AccordionItem>
    </>
  );
};

export default TimelogAmount;
