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

export const changeProject = async (id: Project, hourly_rate: Project) => {
  const { data } = await axios.request<Project>({
    method: "patch",
    url: `http://${import.meta.env.VITE_URL_KEY}/projects/${id}`,
    data: {
      id: id,
      hourly_rate: hourly_rate,
    },
  });
  return data;
};
