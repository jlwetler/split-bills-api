import express from "express";
import cors from "cors";
import authRouter from "./routes/authRouter"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
    res.send("OK");
})

app.use(authRouter);



export default app;