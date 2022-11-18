import axios from "axios";

type Task = {
  id: string;
  name: string;
  createdDate: number;
  projectId: string;
  filter: Function;
  map: Function;
};

export const getTasks = async () => {
  const { data } = await axios.get<Task>(
    `http://${import.meta.env.VITE_URL_KEY}/tasks`
  );
  return data;
};

export const deleteTask = async (id: string) => {
  const { data } = await axios.delete<Task>(
    `http://${import.meta.env.VITE_URL_KEY}/tasks/${id}`
  );
  return;
};
