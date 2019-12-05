const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.port || 5000;

app.use(express.static(path.join(__dirname, "client/build")));
//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "client/build/index.html")));
  });
}
app.get("/api", (req, res) => {
  // res.send({ data: "This message is from node js server" });
  res.status(200).send({ data: "message from node server" });
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/public/index.html"));
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
