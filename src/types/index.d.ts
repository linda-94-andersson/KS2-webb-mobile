type Props = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
};

type Project = {
  id: string;
  name: string;
  color: string;
  userId: string;
  hourly_rate: number;
};

type Task = {
  id: string;
  name: string;
  createdDate: number;
  projectId: string;
};

type Timelog = {
  id: string;
  startTime: number;
  endTime: number;
  taskId: string;
};

type Invoice = {
  id: string;
  status: string;
  due_date: number;
  sum: number;
  customer_name: string;
  created_date: number;
};

type MinutePrecision = 1 | 5 | 15 | 30 | 60;