import Express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const __dirname = path.resolve();

const app = Express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
