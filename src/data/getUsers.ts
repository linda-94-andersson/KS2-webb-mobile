import axios from "axios";

type User = {
  id: string;
  name: string;
  map: Function;
};

export const getUsers = async () => {
  const { data } = await axios.get<User>(
    `http://${import.meta.env.VITE_URL_KEY}/users`
  );
  return data;
};

export const deleteUser = async (id: string) => {
  const { data } = await axios.delete<User>(
    `http://${import.meta.env.VITE_URL_KEY}/users/${id}`
  );
  return;
};
