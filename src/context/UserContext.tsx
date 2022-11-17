import React, {
  useState,
  useMemo,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { getUsers } from "../data/getUsers";

type Props = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
};

type Value = {
  userValue: {
    users: User | null;
  };
  getUserData: () => void;
};

const UserContext = createContext<Value | undefined>(undefined);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: Props) {
  const [users, setUser] = useState(null);

  const userValue = useMemo(() => ({ users, setUser }), [users, setUser]);

  const getUserData = async () => {
    const data = await getUsers();
    setUser(data);
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
