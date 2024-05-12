import { Router } from "express";
import { customerRoutes } from "./customer/customer.routes";
import { donationRoutes } from "./donation/donation.routes";
import { userRoutes } from "./user/user.routes";

const route = Router();

route.use("/user", userRoutes);
route.use("/customer", customerRoutes);
route.use("/donation", donationRoutes);

export { route };
