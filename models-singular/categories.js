'use strict';

const Category = require('./categories-schema');

// Where is our schema defined?
// How do we get it in here so we can run methods on it?

class Categories {

  constructor() {
  }

  get(_id) {
    if (_id) {
      return Category.findOne({_id: _id});
    } else {
      return Category.find({});
    }
  }

  create(record) {
    let newRecord = new Category(record);
    return newRecord.save();
  }

  update(_id, record) {
    return Category.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return Category.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
