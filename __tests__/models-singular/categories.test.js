const Categories = require('../../models-singular/categories.js');

const testModel = require('../../model-test');

testModel(Categories, () => ({name: 'Test Category', description: 'A test category...'}), () => ({name: 'Updated Category'}), 'Singular');
