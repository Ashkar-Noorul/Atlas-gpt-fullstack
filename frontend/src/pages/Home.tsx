import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import TypingAnimation from "../components/typer/TypingAnimation";

const Home = () => {
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box>
          <TypingAnimation />
        </Box>
        <Box>
          <img src="" alt="" />
          <img src="" alt="" />
        </Box>
        <Box>
          <img src="" alt="" />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
