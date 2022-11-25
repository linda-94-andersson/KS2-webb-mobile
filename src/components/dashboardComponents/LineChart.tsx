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
  LineChart as LineCh,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { GrDrag } from "react-icons/gr";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useTimeLog } from "../../context/TimelogContext";
import { getTotalDuration } from "../../utils";

dayjs.extend(duration);

const LineChart = () => {
  const { timeLogValue } = useTimeLog();

  const day0 = Date.now();
  const day1 = Date.now() - 86400000;
  const day2 = Date.now() - 172800000;
  const day3 = Date.now() - 259200000;
  const day4 = Date.now() - 345600000;
  const day5 = Date.now() - 432000000;
  const day6 = Date.now() - 518400000;
  const day7 = Date.now() - 604800000;

  if (!timeLogValue.timeLogs) return <></>;

  const totalTimeDay0 = timeLogValue.timeLogs?.filter(
    (timelog) => timelog.startTime < day0 && timelog.startTime > day1
  );
  const totalTimeDay1 = timeLogValue.timeLogs?.filter(
    (timelog) => timelog.startTime < day1 && timelog.startTime > day2
  );
  const totalTimeDay2 = timeLogValue.timeLogs?.filter(
    (timelog) => timelog.startTime < day2 && timelog.startTime > day3
  );
  const totalTimeDay3 = timeLogValue.timeLogs?.filter(
    (timelog) => timelog.startTime < day3 && timelog.startTime > day4
  );
  const totalTimeDay4 = timeLogValue.timeLogs?.filter(
    (timelog) => timelog.startTime < day4 && timelog.startTime > day5
  );
  const totalTimeDay5 = timeLogValue.timeLogs?.filter(
    (timelog) => timelog.startTime < day5 && timelog.startTime > day6
  );
  const totalTimeDay6 = timeLogValue.timeLogs?.filter(
    (timelog) => timelog.startTime < day6 && timelog.startTime > day7
  );

  const sumDay0 = dayjs.duration(getTotalDuration(totalTimeDay0)).asHours();
  const sumDay1 = dayjs.duration(getTotalDuration(totalTimeDay1)).asHours();
  const sumDay2 = dayjs.duration(getTotalDuration(totalTimeDay2)).asHours();
  const sumDay3 = dayjs.duration(getTotalDuration(totalTimeDay3)).asHours();
  const sumDay4 = dayjs.duration(getTotalDuration(totalTimeDay4)).asHours();
  const sumDay5 = dayjs.duration(getTotalDuration(totalTimeDay5)).asHours();
  const sumDay6 = dayjs.duration(getTotalDuration(totalTimeDay6)).asHours();

  const data = [
    {
      date: dayjs(day6).format("MM-DD"),
      log: sumDay6,
    },
    {
      date: dayjs(day5).format("MM-DD"),
      log: sumDay5,
    },
    {
      date: dayjs(day4).format("MM-DD"),
      log: sumDay4,
    },
    {
      date: dayjs(day3).format("MM-DD"),
      log: sumDay3,
    },
    {
      date: dayjs(day2).format("MM-DD"),
      log: sumDay2,
    },
    {
      date: dayjs(day1).format("MM-DD"),
      log: sumDay1,
    },
    {
      date: dayjs(day0).format("MM-DD"),
      log: sumDay0,
    },
  ];

  const renderLineChart = (
    <LineCh width={600} height={300} data={data}>
      <Line type="monotone" dataKey="log" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
    </LineCh>
  );

  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "#4299E1", color: "white" }}>
            <Box flex="1" textAlign="left">
              <Box style={{ display: "flex" }}>
                {/* <Icon as={GrDrag} w={25} h={25} />{" "} */}
                <span>Line Chart</span>
              </Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Amount of time logs the last 7 days</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{renderLineChart}</Td>
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

export default LineChart;
