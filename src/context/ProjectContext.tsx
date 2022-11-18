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
  hourly_rate?: number;
  map: Function;
  filter: Function;
};

type Value = {
  projectValue: {
    projects: Project | undefined;
    setProjects: React.Dispatch<React.SetStateAction<Project | undefined>>;
  };
  getProjectData: () => Promise<void>;
};

const ProjectContext = createContext<Value | undefined>(undefined);

export const useProject = () => {
  const context = useContext(ProjectContext);

  if (context === undefined) {
    throw new Error("useContext must be used inside Context");
  }

  return context;
};

export function ProjectProvider({ children }: Props) {
  const [projects, setProjects] = useState<Project | undefined>();

  const projectValue = useMemo(
    () => ({ projects, setProjects }),
    [projects, setProjects]
  );

  const getProjectData = async () => {
    const data = await getProjects();
    setProjects(data);
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
