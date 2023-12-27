import { Router } from "express";
import chatRoutes from "./ChatRoutes.js";
import userRoutes from "./UserRoutes.js";

const appRouter = Router();

appRouter.use("/user", userRoutes);
appRouter.use("/chat", chatRoutes);

export default appRouter;
