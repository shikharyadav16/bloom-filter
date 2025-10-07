// const express = require("express");
import express from "express";
import userController from "../controllers/userController.js"

const router = express.Router();
// const { handleFilterUsername } = require('../controllers/userController')

router
  .get("/", (req, res) => {
    return res.status(200).render("index");
  })
  .post("/filter", userController.handleFilterUsername);

export default router;
