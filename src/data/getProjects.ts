import axios from "axios";

export const getProjects = async () => {
  const { data } = await axios.get(
    `http://${import.meta.env.VITE_URL_KEY}/projects`
  );
  return data;
};

export const deleteProject = async (id: string) => {
  const { data } = await axios.delete(
    `http://${import.meta.env.VITE_URL_KEY}/projects/${id}`
  );
  return;
};

// change timelog needs to be setup