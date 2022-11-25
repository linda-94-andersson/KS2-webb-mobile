import React from "react";
import InvoiceAmount from "../components/dashboardComponents/InvoiceAmount";
import ProjectAmount from "../components/dashboardComponents/ProjectAmount";
import TaskAmount from "../components/dashboardComponents/TaskAmount";
import TimelogAmount from "../components/dashboardComponents/TimelogAmount";
import UserAmount from "../components/dashboardComponents/UserAmount";
import { Accordion } from "@chakra-ui/react";
import InvociedYearly from "../components/dashboardComponents/InvociedYearly";
import LineChart from "../components/dashboardComponents/LineChart";
import BlockChart from "../components/dashboardComponents/BlockChart";

const Dashboard = () => {
  return (
    <div>
      <Accordion allowToggle>
        <UserAmount />
        <ProjectAmount />
        <TaskAmount />
        <TimelogAmount />
        <InvoiceAmount />
        <InvociedYearly />
        <LineChart />
        <BlockChart />
      </Accordion>
    </div>
  );
};

export default Dashboard;
