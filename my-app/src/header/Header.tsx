import { Avatar, Box, Flex } from "@chakra-ui/react";
import { Logo } from "../Logo";

export function Header(){
    return <Flex bg='steelblue'
    direction={'row'}
    justifyContent={'end'}
    padding={'0.5rem 1rem'}>
        <Avatar
        size='sm'></Avatar>
    </Flex>
}