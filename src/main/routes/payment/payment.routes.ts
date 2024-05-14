import { addPaymentFactory } from "@/factories/payment/add-payment";
import { routeAdapter } from "@/main/adapters/route-adapter";
import { ensureAuthenticateUser } from "@/middlewares/ensure-authenticate-user";
import { Router } from "express";

const paymentRoutes = Router();

paymentRoutes.post(
  "/",
  ensureAuthenticateUser,
  routeAdapter(addPaymentFactory())
);

export { paymentRoutes };
