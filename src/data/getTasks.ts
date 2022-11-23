import axios from "axios";

export const getTasks = async () => {
  const { data } = await axios.get<Task[]>(
    `http://${import.meta.env.VITE_URL_KEY}/tasks`
  );
  return data;
};

export const deleteTask = async (id: string) => {
  const { data } = await axios.delete<Task[]>(
    `http://${import.meta.env.VITE_URL_KEY}/tasks/${id}`
  );
  return;
};
