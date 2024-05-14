import { addDonationFactory } from "@/factories/donation/add-donation";
import { loadDonationsFactory } from "@/factories/donation/load-donations";
import { updateDonationByIdFactory } from "@/factories/donation/update-donation";
import { routeAdapter } from "@/main/adapters/route-adapter";
import { ensureAuthenticateUser } from "@/middlewares/ensure-authenticate-user";
import { Router } from "express";

const donationRoutes = Router();

donationRoutes.post(
  "/",
  ensureAuthenticateUser,
  routeAdapter(addDonationFactory())
);

donationRoutes.get(
  "/",
  ensureAuthenticateUser,
  routeAdapter(loadDonationsFactory())
);

donationRoutes.put(
  "/:id",
  ensureAuthenticateUser,
  routeAdapter(updateDonationByIdFactory())
);

export { donationRoutes };
