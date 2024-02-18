import express from "express";

import cors from'cors';

import dotenv from "dorenv";

import dbConnect from "./config/mongoose.config";



const app = express();

app.use(express.json(), cors());

app.use('/api', router);

dotenv.config();

const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => console.log("Listening on port 9999"));
