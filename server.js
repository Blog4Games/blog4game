import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const comments = [];
const messages = [];

app.post("/api/comments", (req, res) => {
  const comment = req.body;
  comments.unshift(comment);
  res.json({ success: true });
});

app.get("/api/comments", (req, res) => {
  res.json(comments);
});

app.post("/api/messages", (req, res) => {
  const message = req.body;
  messages.push(message);
  res.json({ success: true });
});

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
