import React, {
  useState,
  useMemo,
  useEffect,
  useContext,
  createContext,
} from "react";
import { getUsers } from "../data/getUsers";

type Value = {
  userValue: {
    users: User[] | undefined;
    setUsers: React.Dispatch<React.SetStateAction<User[] | undefined>>;
  };
  getUserData: () => Promise<void>;
};

const UserContext = createContext<Value | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useContext must be used inside Context");
  }

  return context;
};

export function UserProvider({ children }: Props) {
  const [users, setUsers] = useState<User[] | undefined>();

  const userValue = useMemo(() => ({ users, setUsers }), [users, setUsers]);

  const getUserData = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userValue, getUserData }}>
      {children}
    </UserContext.Provider>
  );
}
