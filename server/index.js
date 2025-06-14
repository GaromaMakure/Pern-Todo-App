const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// Routes
// create a todo
app.post("/todos", async (req, res) => {
  try {
    const{description} = req.body;
    
    res.status(200).json({ message: "Todo received", body: req.body });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// get all todos

// get a todo

// update a todo
// delete a todo

app.listen(5000, () => {
  console.log("server is started on port 5000");
});
