import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ProjectProvider } from "../context/ProjectContext";
import { TaskProvider } from "../context/TaskContext";
import { TimeLogProvider } from "../context/TimelogContext";
import { UserProvider } from "../context/UserContext";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { AiOutlineDashboard } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { InvoiceProvider } from "../context/InvoiceContext";

const Root = () => {
  return (
    <>
      <UserProvider>
        <ProjectProvider>
          <TaskProvider>
            <TimeLogProvider>
              <InvoiceProvider>
                <Outlet />
                <footer
                  style={{
                    position: "fixed",
                    bottom: 0,
                    paddingLeft: 25,
                    width: "100%",
                    backgroundColor: "white",
                    zIndex: 2,
                  }}
                >
                  <Tabs>
                    <TabList>
                      <Tab>
                        <Link to={`/`}>
                          <Icon as={AiOutlineDashboard} w={75} h={75} />
                        </Link>
                      </Tab>
                      <Tab>
                        <Link to={`lists`}>
                          <Icon as={HiOutlineClipboardList} w={75} h={75} />
                        </Link>
                      </Tab>
                      <Tab>
                        <Link to={`invoice`}>
                          <Icon as={TbFileInvoice} w={75} h={75} />
                        </Link>
                      </Tab>
                    </TabList>
                  </Tabs>
                </footer>
              </InvoiceProvider>
            </TimeLogProvider>
          </TaskProvider>
        </ProjectProvider>
      </UserProvider>
    </>
  );
};

export default Root;
