import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { getProjects } from "../data/getProjects";

type Props = {
  children: ReactNode;
};

type Project = {
  id: string;
  name: string;
  color: string;
  userId: string;
  prize?: number;
};

type Value = {
  projectValue: {
    projects: Project | null;
  };
  getProjectData: () => void;
};

const ProjectContext = createContext<Value | undefined>(undefined);

export function useProject() {
  return useContext(ProjectContext);
}

export function ProjectProvider({ children }: Props) {
  const [projects, setProject] = useState(null);

  const projectValue = useMemo(
    () => ({ projects, setProject }),
    [projects, setProject]
  );

  const getProjectData = async () => {
    const data = await getProjects();
    setProject(data);
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <ProjectContext.Provider value={{ projectValue, getProjectData }}>
      {children}
    </ProjectContext.Provider>
  );
}
