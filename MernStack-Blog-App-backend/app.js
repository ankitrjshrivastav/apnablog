import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://ankit:ankit123@cluster0.jtulkq2.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(PORT))
  .then(() =>
    console.log("Connected TO Database")
  )
  .catch((err) => console.log(err));
