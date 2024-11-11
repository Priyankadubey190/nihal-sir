import express, { Request, Response } from "express";

const app = express();

const PORT = 8080;

app.get("/test", (req: Request, res: Response): void => {
  res.json({ data: "test page" });
});

app.listen(PORT, () => {
  console.log("server is running");
});
