import { addCustomerFactory } from "@/factories/customer/add-customer";
import { routeAdapter } from "@/main/adapters/route-adapter";
import { Router } from "express";

const customerRoutes = Router();

customerRoutes.post("/", routeAdapter(addCustomerFactory()));

export { customerRoutes };
