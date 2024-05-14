import { addPaymentFactory } from "@/factories/payment/add-payment";
import { loadPaymentsFactory } from "@/factories/payment/load-payments";
import { routeAdapter } from "@/main/adapters/route-adapter";
import { ensureAuthenticateUser } from "@/middlewares/ensure-authenticate-user";
import { Router } from "express";

const paymentRoutes = Router();

paymentRoutes.post(
  "/",
  ensureAuthenticateUser,
  routeAdapter(addPaymentFactory())
);

paymentRoutes.get(
  "/",
  ensureAuthenticateUser,
  routeAdapter(loadPaymentsFactory())
);

export { paymentRoutes };
