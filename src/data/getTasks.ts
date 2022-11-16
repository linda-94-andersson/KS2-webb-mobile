import axios from "axios";

export const getTasks = async () => {
  const { data } = await axios.get(
    `http://${import.meta.env.VITE_URL_KEY}/tasks`
  );
  return data;
};

export const deleteTask = async (id: string) => {
  const { data } = await axios.delete(
    `http://${import.meta.env.VITE_URL_KEY}/tasks/${id}`
  );
  return;
};
