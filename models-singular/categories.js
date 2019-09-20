'use strict';

const Category = require('./categories-schema');

// Where is our schema defined?
// How do we get it in here so we can run methods on it?

class Categories {

  constructor() {
  }

  get(_id) {
    if (id) {
      return Category.findOne({_id: id});
    } else {
      return Category.find({});
    }
  }

  create(record) {
    let newRecord = new Category(record);
    
  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
  }

}

module.exports = Categories;
