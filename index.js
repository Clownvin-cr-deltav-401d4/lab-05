'use strict';

const mongoose = require('mongoose');

const Products = require('./models-modular/products/products');
const products = new Products();

// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/lab-05';

// Connect
mongoose.connect(MONGOOSE_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Do some work
//{name: 'Test Product', description: 'A test product...', price: 30, available: true}), () => ({name: 'Updated Product', price: 1000, available: false}
(async() => {
  const result = await products.create({name: 'Test Product', description: 'A test product...', price: 30, available: true});
  console.log(`Created new document: ${result}`);
  console.log(`Updated document: ${await products.update(result._id, {name: 'Updated Product', price: 1000, available: false})}`);
})().then(() => {
  mongoose.disconnect();
});
