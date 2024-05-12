import { Router } from "express";
import { userRoutes } from "./user/user.routes";

const route = Router();

route.use("/user", userRoutes);

export { route };
