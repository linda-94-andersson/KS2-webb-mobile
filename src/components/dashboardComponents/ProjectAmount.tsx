import React from "react";
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
} from "@chakra-ui/react";
import { GrDrag } from "react-icons/gr";
import { useProject } from "../../context/ProjectContext";

const ProjectAmount = () => {
  const { projectValue } = useProject();

  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "#4299E1", color: "white" }}>
            <Box flex="1" textAlign="left">
              <Box style={{ display: "flex" }}>
                {/* <Icon as={GrDrag} w={25} h={25} />{" "} */}
                <span>Projects</span>
              </Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Amount of projects</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{projectValue.projects?.length}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </h2>
      </AccordionItem>
    </>
  );
};

export default ProjectAmount;
