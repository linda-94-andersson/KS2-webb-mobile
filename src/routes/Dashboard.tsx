import React, { FC } from "react";

interface Users {
  id?: string;
  name?: string;
}

const Dashboard: FC<Users> = () => {
  return <div>DashBoard</div>;
};

export default Dashboard;
