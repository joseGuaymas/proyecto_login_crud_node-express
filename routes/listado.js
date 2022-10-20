const express = require('express');
const router = express.Router();
const travelsModel = require("../models/travelsModel");

const util = require("util");
const cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

cloudinary.config ({ 
  cloud_name : process.env.CLOUDINARY_CLOUD_NAME , 
  api_key : process.env.CLOUDINARY_API_KEY , 
  api_secret : process.env.CLOUDINARY_API_SECRET  
});

router.get("/", async (req, res) => {
  const travelsRows = await travelsModel.getTravels()
  const travels = travelsRows.map((row) => {
    const imageURL = cloudinary.url(row.image, );
    return { ...row, imageURL };
  });
  res.render("listado", {
    user: req.session.user, travels });
});

router.get("/addTravel" , (req, res) => {
  res.render("addTravel")
});

router.post("/addTravel", async (req, res) => {
  try {
    let imageFile = req.files.imageFile;
    const img_id = (await uploader(imageFile.tempFilePath)).public_id; 
    const data = {
      id: req.body.id, 
      city: req.body.city, 
      country: req.body.country, 
      pack: req.body.pack, 
      image: img_id };

    await travelsModel.addTravel({...req.body, image: img_id });
    res.redirect("/listado")
  } catch (error) {
    console.log(error)
  } });
  

router.get("/handlerEdit/:id", async (req, res) => {
  try {
    const row = await travelsModel.getTravel(req.params.id)
    const travel = { id: row[0].id, 
      city: row[0].city, 
      country: row[0].country, 
      pack: row[0].pack, 
      image: row[0].image
    };
    res.render("editTravel", { travel })  
  } catch (error) {
    console.log(error)
  }
});

router.get("/deleteTravel/:id", async (req, res) => {
  row = await travelsModel.getTravel(req.params.id);
  await destroy(row[0].image);
  await travelsModel.deleteTravel(req.params.id);
  res.redirect("/listado");
});

router.post("/editTravel", async (req, res) => {
  try {
    let img_id = null;
    if (!req.files) {
      img_id = req.body.prevImg
    } else { 
      row = await travelsModel.getTravel(req.body.id);
      await destroy(row[0].image);
      let imageFile = req.files.imageFile;
      img_id = (await uploader(imageFile.tempFilePath)).public_id};
    const data = { 
      id: req.body.id, 
      city: req.body.city, 
      country: req.body.country, 
      pack: req.body.pack, 
      image: img_id 
    }; 
    await travelsModel.modifyTravel(data, data.id);
    res.redirect("/listado")  
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
