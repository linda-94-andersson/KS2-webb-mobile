import React, { useEffect } from "react";
import {
  Checkbox,
  FormControl,
  FormLabel,
  Select,
  Stack,
  Box,
} from "@chakra-ui/react";
import { useProject } from "../../context/ProjectContext";
import { useTask } from "../../context/TaskContext";
import { useTimeLog } from "../../context/TimelogContext";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

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

type Project = {
  id: string;
  name: string;
  color: string;
  userId: string;
  hourly_rate?: number;
};

type Task = {
  id: string;
  name: string;
  projectId: string;
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

  useEffect(() => {
    if (!timeLogValue.timeLogs || !projectValue.projects) return;

    const totalTime = timeLogValue.timeLogs
      .filter((timeLog) =>
        selectedTask.some((taskId) => taskId === timeLog.taskId)
      )
      .map((timeLog) =>
        dayjs.duration(timeLog.endTime - timeLog.startTime).asHours()
      )
      .reduce((acc, sum) => acc + sum, 0);

    const hourlyRate = inputRate;

    const calcPrize = (hourlyRate as number) * totalTime;

    setSum(Math.round(calcPrize * 100) / 100);
  }, [selectedTask, selectedProject, inputRate]);

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
    <FormControl isRequired>
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
    </FormControl>
  );
};

export default Selected;
