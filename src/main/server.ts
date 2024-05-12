import express from "express"
import { serverConfig } from "./config/config"
import env from "./config/env"

const app = express()

serverConfig(app)

app.listen(env.port, () => {
    console.log(`Server running on port ${env.port}`)   
})