import cors from "cors";
import express, { Application } from "express";
import "module-alias/register";
import { route } from "../routes";

export const serverConfig = (app: Application) => {
  app.use(express.json());
  app.use(cors());
  app.use(route);
};
