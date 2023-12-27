import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import TypingAnimation from "../components/typer/TypingAnimation";

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 5,
            my: 10,
          }}
        >
          <img
            src="robot.png"
            alt="robot"
            style={{ width: "200px", margin: "auto" }}
          />
          <img
            src="openai.png"
            alt="openai"
            className="image-inverted rotate"
            style={{ width: "200px", margin: "auto" }}
          />
        </Box>
        <Box sx={{ display: "flex", mx: "auto" }}>
          <img
            src="chat.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "80%" : "60%",
              borderRadius: 20,
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
              boxShadow: "-5px -5px 105px #64f3d5",
            }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
