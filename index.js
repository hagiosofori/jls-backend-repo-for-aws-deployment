// import express from 'express';
// import db from './db';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { db } = require('./db');
const { productRoutes, productLocationRoutes } = require('./routes');


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', (req, res) => { res.status(200).json({ message: "Welcome to Alvin's API for the JLS assessment" }); });
app.use('/products', productRoutes);
app.use('/product-locations', productLocationRoutes);

app.listen(process.env.PORT, async () => {
  await db.sync({ alter: true, });
  console.log('listening on port 8080');
});