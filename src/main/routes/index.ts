import { Router } from "express";
import { customerRoutes } from "./customer/customer.routes";
import { userRoutes } from "./user/user.routes";

const route = Router();

route.use("/user", userRoutes);
route.use("/customer", customerRoutes);

export { route };
