import axios from "axios";

export const getTasks = async () => {
  const { data } = await axios.get(
    `http://${import.meta.env.VITE_URL_KEY}/tasks`
  );
  return data;
};