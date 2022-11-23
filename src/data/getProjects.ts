import axios from "axios";

export const getProjects = async () => {
  const { data } = await axios.get<Project[]>(
    `http://${import.meta.env.VITE_URL_KEY}/projects`
  );
  return data;
};

export const deleteProject = async (id: string) => {
  const { data } = await axios.delete<Project[]>(
    `http://${import.meta.env.VITE_URL_KEY}/projects/${id}`
  );
  return;
};

export const changeProject = async (id: string, hourly_rate: number) => {
  const { data } = await axios.request<Project[]>({
    method: "patch",
    url: `http://${import.meta.env.VITE_URL_KEY}/projects/${id}`,
    data: {
      id: id,
      hourly_rate: hourly_rate,
    },
  });
  return data;
};
