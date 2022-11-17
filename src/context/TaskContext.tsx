import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { getTasks } from "../data/getTasks";

type Props = {
  children: ReactNode;
};

type Task = {
  id: string;
  name: string;
  createdDate: number;
  projectId: string;
};

type Value = {
  taskValue: {
    tasks: Task | null;
  };
  getTaskData: () => void;
};

const TaskContext = createContext<Value | undefined>(undefined);

export function useTask() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }: Props) {
  const [tasks, setTask] = useState(null);

  const taskValue = useMemo(() => ({ tasks, setTask }), [tasks, setTask]);

  const getTaskData = async () => {
    const data = await getTasks();
    setTask(data);
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
