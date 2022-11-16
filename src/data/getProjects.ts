import axios from "axios";

export const getProjects = async () => {
  const { data } = await axios.get(
    `http://${import.meta.env.VITE_URL_KEY}/projects`
  );
  return data;
};

// change timelog needs to be setup 