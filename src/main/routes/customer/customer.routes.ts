import { addCustomerFactory } from "@/factories/customer/add-customer";
import { routeAdapter } from "@/main/adapters/route-adapter";
import { ensureAuthenticateUser } from "@/middlewares/ensure-authenticate-user";
import { Router } from "express";

const customerRoutes = Router();

customerRoutes.post(
  "/",
  ensureAuthenticateUser,
  routeAdapter(addCustomerFactory())
);

export { customerRoutes };
