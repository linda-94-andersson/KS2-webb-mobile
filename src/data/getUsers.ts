import axios from "axios";

export const getUsers = async () => {
  const { data } = await axios.get(
    `http://${import.meta.env.VITE_URL_KEY}/users`
  );
  return data;
};