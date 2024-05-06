const { Router } = require("express");
const beautyofferModel = require("../Models/beautyoffermodel")

const btofferRouter = Router();

btofferRouter.get("/beautyoffer", async (req, res) => {
  try {
    const data = await beautyofferModel.find();
    res.send(data);
  } catch (error) {
    res.status(501).send("Error:", error);
  }
});

module.exports = btofferRouter;
