import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
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

  const handleSelectedTask = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
          <FormLabel></FormLabel>
          <Select
            required
            name="taks"
            id="tasks"
            value={selectedTask}
            onChange={handleSelectedTask}
          >
            <option value="">Pick a task</option>
            {/* Should be more than just one task? */}
            {taskValue.tasks ? (
              taskValue.tasks
                .filter((t: Task) => t.projectId === selectedProject)
                .map((t: Task) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))
            ) : (
              <option value="">No tasks found</option>
            )}
          </Select>
        </>
      ) : (
        <>
          <FormLabel></FormLabel>
          <Select>
            <option value="">Pick a project before a task</option>
          </Select>
        </>
      )}
    </FormControl>
  );
};

export default Selected;
