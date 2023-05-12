import { Button, Grid, Square, Text, VStack, border } from "@chakra-ui/react";
import React, { useState } from "react";

const Game = () => {
  const [board, setBoard] = useState([
    new Array(3).fill(-1),
    new Array(3).fill(-1),
    new Array(3).fill(-1),
  ]);
  const [chance, setChance] = useState(1);

  const [winState, setWinState] = useState(false);

  //square click
  const squareClick = (row, col) => {
    if (winState || board[row][col] !== -1) {
      return;
    }

    if (chance === 1) {
      board[row][col] = 0;
    } else {
      board[row][col] = 1;
    }

    const win = handleWin();

    if (win) {
      setWinState(true);
      setBoard(board);
      return;
    }

    setChance(chance * -1);
    setBoard(board);
  };

  //handle Win
  const handleWin = () => {

    //check Rows
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] === board[row][1] &&
        board[row][0] === board[row][2] &&
        board[row][0] !== -1
      ) {
        return true;
      }
    }

    //check Column
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] === board[1][col] &&
        board[0][col] === board[2][col] &&
        board[0][col] !== -1
      ) {
        return true;
      }
    }

    // check diagonals
    if (
      (board[0][0] === board[1][1] &&
        board[0][0] === board[2][2] &&
        board[0][0] !== -1) ||
      (board[0][2] === board[1][1] &&
        board[0][2] === board[2][0] &&
        board[0][2] !== -1)
    ) {
      return true;
    }

    return false;
  };

  
  //handle Reset
  const handleReset = () => {
    setBoard([
      new Array(3).fill(-1),
      new Array(3).fill(-1),
      new Array(3).fill(-1),
    ]);
    setChance(1);
    setWinState(false);
  };

  return (
    <VStack w={"full"} h={"50vh"} justifyContent={"center"} rowGap={"4"}>
      <Text fontSize={"2xl"}>{`${
        chance > 0
          ? JSON.parse(localStorage.getItem("player-names")).p1
          : JSON.parse(localStorage.getItem("player-names")).p2
      }'s Turn`}</Text>
      <Text>{`${
        winState
          ? chance > 0
            ? JSON.parse(localStorage.getItem("player-names")).p1 + " Won"
            : JSON.parse(localStorage.getItem("player-names")).p2 + " Won"
          : ""
      }`}</Text>
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
                _hover={{ bg: "gray.300" }}
                transition={"all 0.3s"}
                onClick={() => squareClick(row, col)}
              >
                {cell === 1 ? "X" : cell === 0 ? "O" : null}
              </Square>
            );
          });
        })}
      </Grid>

      <Button colorScheme="blue" onClick={handleReset}>
        Reset Game
      </Button>
    </VStack>
  );
};

export default Game;
