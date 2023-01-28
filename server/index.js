const path = require("path");
const express = require("express");
var cors = require("cors");
require("dotenv").config();
const apiRouter = require("./routes/api");

const PORT = process.env.PORT || 3003;

const app = express();
app.use(cors());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from CatWiki!" });
// });

app.use("/api", apiRouter);

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
