import { Container } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Rules from "./Components/Rules";
import Game from "./Components/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {

  const GamePage = () => {
    return (
      <>
        <Rules />
        <Game />
      </>
    );
  }
  

  return (
    <BrowserRouter>
      <Container maxW={"4xl"}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/v1/game" element={<GamePage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
