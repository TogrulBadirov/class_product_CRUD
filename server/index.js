import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import ProductRouter from "./src/router/ProductRouter.js";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json())

app.use("/product",ProductRouter)



const connectionUrl =
  "mongodb+srv://togrul321:mPTi1uWck0vzXeXf@firstcluster.udpwqcz.mongodb.net/";

mongoose.connect(connectionUrl).then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
