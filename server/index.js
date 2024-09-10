import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import clientRoutes from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import salesRoutes from "./routes/sales.js"
import managementRoutes from "./routes/management.js"

/* Configeration */
dotenv.config()
const app = express()
app.use(express.json())
app.use(express.json())
app.use(helmet)
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* Routes */

app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)


/* Connecting to DB */ 
const PORT = process.env.PORT || 6969
const db = async ()=>{
    try {
        const data = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Succefully connected to DB on port ${PORT}`)
    } catch (error) {
        console.log("Couldn't connect to database")
    }
}
db()