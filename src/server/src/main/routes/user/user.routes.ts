import { authenticateUserFactory } from "@/factories/user/authenticate-user";
import { registerUserFactory } from "@/factories/user/register-user";
import { routeAdapter } from "@/main/adapters/route-adapter";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/register", routeAdapter(registerUserFactory()));
userRoutes.post("/login", routeAdapter(authenticateUserFactory()));

export { userRoutes };
