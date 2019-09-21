'use strict';

const Product = require('./products-schema');

// Where is our schema defined?
// How do we get it in here so we can run methods on it?

class Products {

  constructor() {
  }

  get(_id) {
    if (_id) {
      return Product.findOne({_id: _id});
    } else {
      return Product.find({});
    }
  }

  create(record) {
    let newRecord = new Product(record);
    return newRecord.save();
  }

  update(_id, record) {
    return Product.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return Product.findByIdAndDelete(_id);
  }

}

module.exports = Products;
