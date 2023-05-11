import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Rules = () => {
  return (
    <Box w={"full"} pt={"5"}>
      <Heading>Rules:</Heading>
      <Text>
        1. The game starts with an empty grid, and players take turns placing their
        marks in any unoccupied square.
      </Text>
      <Text>
        2. he first player to get three marks in a row (horizontally, vertically,
        or diagonally) wins the game.
      </Text>
      <Text>
        3. If all 9 squares are filled and no player has three marks in a row, then
        the game is a draw.
      </Text>
    </Box>
  );
};

export default Rules;
