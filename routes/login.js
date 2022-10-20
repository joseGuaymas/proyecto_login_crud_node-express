const express = require("express");
const router = express.Router();
const usersModel = require("../models/usersModel")
const travelsModel = require("../models/travelsModel")
const cloudinary = require("cloudinary").v2;

router.get("/", (req, res, next) => {
  res.render("login",);
});

router.post("/", async (req, res, next) => {
  try {
    const user = req.body.user;
    const pass = req.body.pass;
    const data = await usersModel.getUser(user, pass);
    if (data != undefined) {
      const travelsRows = await travelsModel.getTravels();
      const travels = travelsRows.map((row) => {
        const imageURL = cloudinary.url(row.image, );
        return { ...row, imageURL };
      });
      req.session.user = user;
      res.render("listado", { user, travels });
    } else {
      res.render("login");
    }
  } catch {
    console.log("error")
  }
});

router.get("/logout", (req, res, next) => {
  req.session.destroy();
  res.render("login");
});

module.exports = router;
