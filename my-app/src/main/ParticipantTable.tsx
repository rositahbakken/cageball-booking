import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export function ParticipantTable(){
    return <Box padding={'3rem'}>
    <TableContainer>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>Nr.</Th>
            <Th>Deltager</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1.</Td>
            <Td>Rosita Høybakken</Td>
          </Tr>
          <Tr>
            <Td>2.</Td>
            <Td>Martin B. Smebye</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  </Box>
}