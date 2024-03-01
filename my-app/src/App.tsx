import * as React from "react"
import {
  ChakraProvider,
  theme,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Grid,
  GridItem,
  Button,
  ButtonGroup,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Header } from "./header/Header"
import { ParticipantTable } from "./main/ParticipantTable"
import { CageballInformation } from "./main/CageballInformation"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid
  templateAreas={`"header"
                  "main"
                  "footer"`}
  h='auto'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem area={'header'}>
    <Header></Header>
  </GridItem>
  <GridItem pl='2' area={'main'}>
    <CageballInformation></CageballInformation>
    <ParticipantTable></ParticipantTable>
    <ButtonGroup>
      <Button padding={'1rem'}>Meld på</Button>
      <Button> +1 </Button>
    </ButtonGroup>
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
  </ChakraProvider>
)
