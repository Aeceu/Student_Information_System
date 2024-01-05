import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import StudentRouter from "./routers/students/StudentRouter";
import AdminRouter from "./routers/admin/AdminRouter";
import cloudinary from "./utils/cloudinary";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "100mb" }));
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

app.post(
  "/api/v1/upload",
  async (req: express.Request, res: express.Response) => {
    const { file } = req.body;
    try {
      const result = await cloudinary.uploader.upload(file, {
        folder: "student",
      });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
);

const PORT = process.env.PORT!;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} !`);
});
