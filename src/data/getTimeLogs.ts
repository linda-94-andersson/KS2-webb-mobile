import axios from "axios";

export const getTimeLogs = async () => {
  const { data } = await axios.get(
    `http://${import.meta.env.VITE_URL_KEY}/timelogs`
  );
  return data;
};

export const deleteTimeLogs = async (id: string) => {
  const { data } = await axios.delete(
    `http://${import.meta.env.VITE_URL_KEY}/timelogs/${id}`
  );
  return;
};
