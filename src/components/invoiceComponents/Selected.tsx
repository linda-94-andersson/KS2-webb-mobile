import React from "react";
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

type Props = {
  selectedProject: string;
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
  selectedTask: string;
  setSelectedTask: React.Dispatch<React.SetStateAction<string>>;
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
  selectedTask,
  setSelectedTask,
}: Props) => {
  const { projectValue } = useProject();
  const { taskValue } = useTask();

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
