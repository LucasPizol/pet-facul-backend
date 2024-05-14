import { addPaymentFactory } from "@/factories/payment/add-payment";
import { loadPaymentsFactory } from "@/factories/payment/load-payments";
import { updatePaymentByIdFactory } from "@/factories/payment/update-payment-by-id";
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

paymentRoutes.put(
  "/:id",
  ensureAuthenticateUser,
  routeAdapter(updatePaymentByIdFactory())
);

export { paymentRoutes };
