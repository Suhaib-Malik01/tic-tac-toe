import { Grid, Square, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Game = () => {
  const [board, setBoard] = useState(new Array(9).fill(0));

  console.log(board);

  return (
    <VStack w={"full"} h={"50vh"} justifyContent={"center"}>
      <Grid maxW={"200px"} gridTemplateColumns={"repeat(3,1fr)"}>
        {board.map((ele) => {
          return <Square w={"12"} h={"12"} border={"1px"}></Square>;
        })}
      </Grid>
    </VStack>
  );
};

export default Game;
