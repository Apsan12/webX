import { config } from "dotenv";
import express from "express";
import dbconnect from "./utlils/dbConnect.js";
import userRouter from "./routes/user.routes.js";
import cors from "cors";

config();
const app = express();
// console.log("PORT:", process.env.PORT);
// console.log("Mongo URI:", process.env.MONGO_URI);

app.use(express.json());

const port = process.env.PORT ;
app.use(cors({
  origin: "*" 
}));

app.get('/', (req, res) => {
  res.send('Welcome to the User Management API');
});
app.use("/api/users", userRouter);

dbconnect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
