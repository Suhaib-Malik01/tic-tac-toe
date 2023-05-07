import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Home = () => {

    
  return (
    <Flex minH={"50vh"} alignItems={"center"} justifyContent={"center"}>
      <Stack boxShadow={"lg"} p={"5"} minW={"40%"}>
        <FormControl isRequired>
            <FormLabel>Player-1 Name</FormLabel>
            <Input  />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Player-2 Name</FormLabel>
            <Input  />
        </FormControl>
        <Button w={"full"} colorScheme="green">
          Start
        </Button>
      </Stack>
    </Flex>
  );
};

export default Home;
