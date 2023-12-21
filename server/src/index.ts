import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import StudentRouter from "./routers/students/StudentRouter";
import AdminRouter from "./routers/admin/AdminRouter";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1", StudentRouter);
app.use("/api/v1", AdminRouter);

const PORT = process.env.PORT!;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} !`);
});
