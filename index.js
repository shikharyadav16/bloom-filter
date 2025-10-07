// const express = require('express');
import express from "express";
import path from "path";
const app = express();

app.use(express.json());

// const staticRoutes = require('./routes/staticRoutes');
import staticRoutes from "./routes/staticRoutes.js"

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", staticRoutes);

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log("Server is running at port", port);
})