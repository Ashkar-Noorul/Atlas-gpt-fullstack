import { Router } from "express";

const chatRoutes = Router();

chatRoutes.get("/", (req, res) => {
  res.json("test ok");
});

export default chatRoutes;
