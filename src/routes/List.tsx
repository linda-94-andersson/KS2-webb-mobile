import React from "react";
import { Accordion } from "@chakra-ui/react";
import UsersList from "../components/listComponents/UsersList";
import ProjectsList from "../components/listComponents/ProjectsList";
import TasksList from "../components/listComponents/TasksList";
import TimelogsList from "../components/listComponents/TimelogsList";
import InvoicesList from "../components/listComponents/InvoicesList";

const List = () => {
  return (
    <div>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        style={{ paddingBottom: 100 }}
      >
        <UsersList />
        <ProjectsList />
        <TasksList />
        <TimelogsList />
        <InvoicesList />
      </Accordion>
    </div>
  );
};

export default List;
