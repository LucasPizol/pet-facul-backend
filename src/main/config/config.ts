import express, { Application } from "express";
import cors from "cors";

export const serverConfig = (app: Application) => {
  app.use(express.json());
  app.use(cors());
};
