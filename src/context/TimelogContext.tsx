import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { getTimeLogs } from "../data/getTimeLogs";

type Props = {
  children: ReactNode;
};

type Timelog = {
  id: string;
  startTime: number;
  endTime: number;
  taskId: string;
};

type Value = {
  timeLogValue: {
    timeLogs: Timelog | null;
  };
  getTimeLogData: () => void;
};

const TimelogContext = createContext<Value | undefined>(undefined);

export function useTimeLog() {
  return useContext(TimelogContext);
}

export function TimeLogProvider({ children }: Props) {
  const [timeLogs, setTimeLogs] = useState(null);

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
