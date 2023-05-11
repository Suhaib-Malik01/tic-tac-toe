import { Button, Grid, Square, VStack, border } from "@chakra-ui/react";
import React, { useState } from "react";

const Game = () => {
  const [board, setBoard] = useState([
    new Array(3).fill(-1),
    new Array(3).fill(-1),
    new Array(3).fill(-1),
  ]);
  const [chance, setChance] = useState(1);

  const [winState,setWinState] = useState(false);

  const squareClick = (row, col) => {
    if (winState || board[row][col] !== -1) {
      return;
    }

    if (chance === 1) {
      board[row][col] = 0;
    } else {
      board[row][col] = 1;
    }

    handleWin();

    setChance(chance * -1);
    setBoard(board);
  };

  const handleWin = () => {

  }

  return (
    <VStack w={"full"} h={"50vh"} justifyContent={"center"} rowGap={"4"}>
      <Grid maxW={"250px"} gridTemplateColumns={"repeat(3,1fr)"}>
        {board.map((ele, row) => {
          return ele.map((cell, col) => {
            return (
              <Square
                w={"16"}
                h={"16"}
                border={"1px"}
                key={col}
                fontSize={"5xl"}
                _hover={{bg:"gray.300"}}
                transition={"all 0.3s"}
                onClick={() => squareClick(row, col)}
              >
                {cell === 1 ? "X" : cell === 0 ? "O" : null}
              </Square>
            );
          });
        })}
      </Grid>

      <Button colorScheme="blue">Reset Game</Button>
    </VStack>
  );
};

export default Game;
