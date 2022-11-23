import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getTasks } from "../data/getTasks";

type Value = {
  taskValue: {
    tasks: Task[] | undefined;
    setTasks: React.Dispatch<React.SetStateAction<Task[] | undefined>>;
  };
  getTaskData: () => Promise<void>;
};

const TaskContext = createContext<Value | undefined>(undefined);

export const useTask = () => {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useContext must be used inside Context");
  }

  return context;
};

export function TaskProvider({ children }: Props) {
  const [tasks, setTasks] = useState<Task[] | undefined>();

  const taskValue = useMemo(() => ({ tasks, setTasks }), [tasks, setTasks]);

  const getTaskData = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    getTaskData();
  }, []);

  return (
    <TaskContext.Provider value={{ taskValue, getTaskData }}>
      {children}
    </TaskContext.Provider>
  );
}
