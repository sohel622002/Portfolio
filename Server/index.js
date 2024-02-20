const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Project = require("./models/project.model");

// This is updated

const app = express();
app.use(cors());
app.use(express.json());

app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find({});
    if (!projects) res.json({ message: "Cant Find Any Products" });
    res.json(projects)
  } catch (error) {
    console.log(error);
  }
});

app.post("/projects", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const project = await Project.create(data);
    res.send("Project Added !");
  } catch (error) {
    console.log(error);
  }
});

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() =>
    app.listen("5000", () => {
      console.log("App Runnig On Port 5000");
    })
  )
  .catch((error) => console.log(error));
