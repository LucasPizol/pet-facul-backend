import { Application } from "express";
import { serverConfig } from "./config/config";
import env from "./config/env";

let serverRunning = false;

export const initializeServer = (app: Application) => {
  if (serverRunning) return;
  serverConfig(app);

  try {
    app.listen(env.port, () => {
      console.log(`Server running on port ${env.port}`);
    });
  } catch (error) {
    return "Server is already running";
  }
};
