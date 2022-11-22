import React, { useMemo, useEffect } from "react";
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
  selectedTask: string;
  setSelectedTask: React.Dispatch<React.SetStateAction<string>>;
  setLogTime: React.Dispatch<React.SetStateAction<number>>;
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

type Timelog = {
  id: string;
  startTime: number;
  endTime: number;
  taskId: string;
};

const Selected = ({
  selectedProject,
  setSelectedProject,
  selectedTask,
  setSelectedTask,
  setLogTime,
}: Props) => {
  const { projectValue } = useProject();
  const { taskValue } = useTask();
  const { timeLogValue } = useTimeLog();

  const totalTime = useMemo(() => {
    if (timeLogValue.timeLogs) {
      const filterdTimes: [] = timeLogValue.timeLogs.filter(
        (tl: Timelog) => tl.taskId === selectedTask && tl.endTime
      );
      const elapsed = filterdTimes.reduce((sum: number, curr: Timelog) => {
        return sum + (curr.endTime - curr.startTime);
      }, 0);
      return elapsed;
    }
  }, [timeLogValue.timeLogs, selectedTask]);

  const callTime = () => {
    if (totalTime === undefined) return;
    const time = dayjs.duration( totalTime).asHours()
    setLogTime(time);
  };

  useEffect(() => {
    callTime();
  }, [selectedTask]);


  const handleSelectedProject = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProject(e.target.value);
  };

  const handleSelectedTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTask(e.target.value);
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
    </FormControl>
  );
};

export default Selected;
