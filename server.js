const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api/customer", (req, res) => {
  const customers = [
    { name: "jack", age: 16 },
    { name: "Porter", age: 26 },
    { name: "Eric", age: 21 }
  ];

  res.json(customers);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/test", (req, res) => {
  res.send("This is a test");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("port 5000 is connected");
});
