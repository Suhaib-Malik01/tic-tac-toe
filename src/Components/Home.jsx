import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const toast = useToast();

    const saveData =  () =>{

        const p1Name = document.getElementById("p1-name").value;
        const p2Name = document.getElementById("p2-name").value;

        if(p1Name=="" || p2Name==""){

            toast({
                title: "Invalid Names",
                status: "error",
                duration: 3000,
                position:"top"
            });
            return;
        }

        const data= {
            p1 : p1Name,
            p2 : p2Name,
        }

        localStorage.setItem("player-names",JSON.stringify(data));

        navigate("/v1/game");
    }



  return (
    <Flex minH={"50vh"} alignItems={"center"} justifyContent={"center"}>
      <Stack boxShadow={"lg"} p={"5"} minW={"40%"}>
        <FormControl isRequired>
            <FormLabel>Player-1 Name</FormLabel>
            <Input id="p1-name" />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Player-2 Name</FormLabel>
            <Input id="p2-name"  />
        </FormControl>
        <Button w={"full"} colorScheme="green" onClick={saveData}>
          Start
        </Button>
      </Stack>
    </Flex>
  );
};

export default Home;
