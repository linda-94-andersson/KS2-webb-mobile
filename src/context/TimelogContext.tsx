import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getTimeLogs } from "../data/getTimeLogs";

type Value = {
  timeLogValue: {
    timeLogs: Timelog[] | undefined;
    setTimeLogs: React.Dispatch<React.SetStateAction<Timelog[] | undefined>>;
  };
  getTimeLogData: () => Promise<void>;
};

const TimelogContext = createContext<Value | undefined>(undefined);

export const useTimeLog = () => {
  const context = useContext(TimelogContext);

  if (context === undefined) {
    throw new Error("useContext must be used inside Context");
  }

  return context;
};

export function TimeLogProvider({ children }: Props) {
  const [timeLogs, setTimeLogs] = useState<Timelog[] | undefined>();

  const timeLogValue = useMemo(
    () => ({ timeLogs, setTimeLogs }),
    [timeLogs, setTimeLogs]
  );

  const getTimeLogData = async () => {
    const data = await getTimeLogs();
    setTimeLogs(data);
  };

  useEffect(() => {
    getTimeLogData();
  }, []);

  return (
    <TimelogContext.Provider value={{ timeLogValue, getTimeLogData }}>
      {children}
    </TimelogContext.Provider>
  );
}
