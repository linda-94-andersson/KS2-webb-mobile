import React from "react";
import InvoiceAmount from "../components/dashboardComponents/InvoiceAmount";
import ProjectAmount from "../components/dashboardComponents/ProjectAmount";
import TaskAmount from "../components/dashboardComponents/TaskAmount";
import TimelogAmount from "../components/dashboardComponents/TimelogAmount";
import UserAmount from "../components/dashboardComponents/UserAmount";
import { Accordion } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <div>
      <Accordion allowToggle>
        <UserAmount />
        <ProjectAmount />
        <TaskAmount />
        <TimelogAmount />
        <InvoiceAmount />
      </Accordion>
    </div>
  );
};

export default Dashboard;
