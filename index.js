import express from "express";

const app = express();

const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  return res.json({ msg: "hello1 from server v1" });
});

app.listen(PORT, () => {
  console.log(`listening at: ${PORT}`);
});
