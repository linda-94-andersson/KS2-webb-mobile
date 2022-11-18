import axios from "axios";

type Project = {
  id: string;
  name: string;
  color: string;
  userId: string;
  hourly_rate?: number;
  map: Function;
  filter: Function;
};


export const getProjects = async () => {
  const { data } = await axios.get<Project>(
    `http://${import.meta.env.VITE_URL_KEY}/projects`
  );
  return data;
};

export const deleteProject = async (id: string) => {
  const { data } = await axios.delete<Project>(
    `http://${import.meta.env.VITE_URL_KEY}/projects/${id}`
  );
  return;
};

// change timelog needs to be setup