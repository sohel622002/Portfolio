const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Project = require("./models/project.model");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find({});
    if (!projects) res.json({ message: "Cant Find Any Products" });
    res.json(projects);
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
    app.listen(process.env.PORT, () => {
      console.log(`App Runnig On Port ${process.env.PORT}`);
    })
  )
  .catch((error) => console.log(error));
