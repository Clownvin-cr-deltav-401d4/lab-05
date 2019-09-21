const Products = require('../../models-modular/products/products');

const testModel = require('../../model-test');

testModel(Products, () => ({name: 'Test Product', description: 'A test product...', price: 30, available: true}), () => ({name: 'Updated Product', price: 1000, available: false}), 'Modular');