import { addDonationFactory } from "@/factories/donation/add-donation";
import { routeAdapter } from "@/main/adapters/route-adapter";
import { ensureAuthenticateUser } from "@/middlewares/ensure-authenticate-user";
import { Router } from "express";

const donationRoutes = Router();

donationRoutes.post(
  "/",
  ensureAuthenticateUser,
  routeAdapter(addDonationFactory())
);

export { donationRoutes };
