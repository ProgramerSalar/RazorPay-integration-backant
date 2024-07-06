import express from "express"
import { config } from "dotenv"



config({
    path:"./config/config.env"
})




export const app = express()



import paymentRoute from "./routes/paymentRoutes.js"


app.use('/api', paymentRoute)