import express from "express";
const app = express();
import "express-async-errors";
import morgan from "morgan";
import authRouter from "./authRouter.js";

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", authRouter);

const port = process.env.PORT || 8000;

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    // dash.error(`Error : ${error},Request : ${req.originalUrl}`);
    // res.render("400");
  }
};
start();
