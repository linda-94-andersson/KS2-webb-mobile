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
  map: Function;
};

type Value = {
  userValue: {
    users: User | undefined;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  };
  getUserData: () => Promise<void>;
};

const UserContext = createContext<Value | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used inside AuthContext");
  }

  return context;
};

export function UserProvider({ children }: Props) {
  const [users, setUser] = useState<User | undefined>();

  const userValue = useMemo(() => ({ users, setUser }), [users, setUser]);

  const getUserData = async () => {
    const data: User = await getUsers();
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
