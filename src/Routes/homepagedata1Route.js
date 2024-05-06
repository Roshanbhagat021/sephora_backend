const { Router } = require("express");
const homePageModel = require("../Models/homepagedata1Model");

const db1Router = Router();

db1Router.get("/db1", async (req, res) => {
  try {
    const data = await homePageModel.find();
    res.send(data);
  } catch (error) {
    res.status(501).send("Error:", error);
  }
});

module.exports = db1Router;
