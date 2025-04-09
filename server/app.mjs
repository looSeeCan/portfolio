import express from "express";
import path from "node:path";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.use(express.static(path.join(process.cwd(), "dist")));

//Catch-all route: Serve the index.html file for any unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
});

// TODO: "main": app.mjs
