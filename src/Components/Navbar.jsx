import React from "react";

import { Icon } from "@iconify/react";
import { Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex mt={1} justifyContent={"space-between"}>
      <Icon fontSize={"3rem"} icon="game-icons:tic-tac-toe" />

      <Heading>Tic Tac Toe</Heading>
      <Icon fontSize={"3rem"} icon="game-icons:tic-tac-toe" />
    </Flex>
  );
};

export default Navbar;
