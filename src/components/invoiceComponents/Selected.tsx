import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormLabel,
  Select,
  Stack,
  Box,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useProject } from "../../context/ProjectContext";
import { useTask } from "../../context/TaskContext";
import { useTimeLog } from "../../context/TimelogContext";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { getTotalDuration, roundDurationMinutes } from "../../utils";

dayjs.extend(duration);

type Props = {
  selectedProject: string;
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
  selectedTasks: string[];
  setSelectedTasks: React.Dispatch<React.SetStateAction<string[]>>;
  inputRate: number;
  sum: number | undefined;
  setSum: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const Selected = ({
  selectedProject,
  setSelectedProject,
  selectedTasks: selectedTask,
  setSelectedTasks: setSelectedTask,
  inputRate,
  sum,
  setSum,
}: Props) => {
  const { projectValue } = useProject();
  const { taskValue } = useTask();
  const { timeLogValue } = useTimeLog();

  const [totalHours, setTotalHours] = useState(0);
  const [roundedHours, setRoundedHours] = useState(0);
  const [roundPrecision, setRoundPrecision] = useState<MinutePrecision | 0>(0);

  useEffect(() => {
    if (!timeLogValue.timeLogs || !projectValue.projects) return;

    const filteredLogs = timeLogValue.timeLogs.filter((timeLog) =>
      selectedTask.some((taskId) => taskId === timeLog.taskId)
    );
    const totalTime = dayjs.duration(getTotalDuration(filteredLogs)).asHours();

    setTotalHours(totalTime);
  }, [selectedTask, selectedProject]);

  useEffect(() => {
    const projectRate =
      projectValue.projects &&
      projectValue.projects.find((project) => project.id === selectedProject);

    const hourlyRate = projectRate?.hourly_rate || inputRate;

    const calcPrize = hourlyRate * roundedHours;

    setSum(Math.round(calcPrize * 100) / 100);
  }, [roundedHours, inputRate, projectValue.projects]);

  useEffect(() => {
    setRoundedHours(
      !roundPrecision
        ? totalHours
        : roundDurationMinutes(totalHours, roundPrecision)
    );
  }, [totalHours, roundPrecision]);

  const handleSelectRound = (value: string) => {
    const num = parseInt(value);
    if (
      num === 0 ||
      num === 1 ||
      num === 5 ||
      num === 15 ||
      num === 30 ||
      num === 60
    ) {
      setRoundPrecision(num);
    }
  };

  const handleSelectedProject = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProject(e.target.value);
  };

  const handleSelectedTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedTask((prev) => [...prev, e.target.value]);
    }
    if (!e.target.checked) {
      setSelectedTask((tasks) =>
        tasks.filter((taskId) => taskId !== e.target.value)
      );
    }
  };

  return (
    <>
      <FormLabel></FormLabel>
      <Select
        required
        name="projects"
        id="projects"
        value={selectedProject}
        onChange={handleSelectedProject}
      >
        <option value="">Pick a project</option>
        {projectValue.projects ? (
          projectValue.projects.map((p: Project) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))
        ) : (
          <option value="">No projects found</option>
        )}
      </Select>
      <br />
      {selectedProject.length !== 0 ? (
        <>
          <FormLabel style={{ marginLeft: 10 }}>Select task(s)</FormLabel>
          <Box style={{ marginLeft: 10 }}>
            <Stack spacing={5} direction="column">
              {taskValue.tasks &&
                taskValue.tasks
                  .filter((t: Task) => t.projectId === selectedProject)
                  .map((t: Task) => (
                    <Checkbox
                      colorScheme="blue"
                      key={t.id}
                      value={t.id}
                      onChange={handleSelectedTask}
                    >
                      {t.name}
                    </Checkbox>
                  ))}
            </Stack>
            <br />
            <RadioGroup onChange={handleSelectRound} value={roundPrecision}>
              <Stack direction="row">
                <Radio value={0}>Not rounded</Radio>
                <Radio value={1}>1</Radio>
                <Radio value={5}>5</Radio>
                <Radio value={15}>15</Radio>
                <Radio value={30}>30</Radio>
                <Radio value={60}>60</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </>
      ) : (
        <>
          <FormLabel style={{ marginLeft: 10 }}>
            Select a project to pick task(s)
          </FormLabel>
        </>
      )}
      {sum !== 0 ? (
        <>
          <br />
          <Box style={{ marginLeft: 10 }}>
            The amount of time that will be invoiced: <b>{sum}</b>
          </Box>
        </>
      ) : (
        <>
          <br />
          <Box style={{ marginLeft: 10 }}>
            No time to invoice, please pick a task with time logs
          </Box>
        </>
      )}
    </>
  );
};

export default Selected;
