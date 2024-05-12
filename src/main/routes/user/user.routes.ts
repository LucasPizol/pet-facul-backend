import { registerUserFactory } from "@/factories/user/register-user";
import { routeAdapter } from "@/main/adapters/route-adapter";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/", routeAdapter(registerUserFactory()));

export { userRoutes };
