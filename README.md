# LAB - 5

## Data Models with Mongo, Mongoose, ans Supergoose

### Author: Calvin Hall

### Links and Resources
* [submission PR](https://github.com/Clownvin-cr-deltav-401d4/lab-05/pull/1)
* [travis](https://www.travis-ci.com/Clownvin-cr-deltav-401d4/lab-05)

### Modules
#### `model-test.js`
##### Exported Values and Methods
* testModel(Model, getTestObj, getTestUpdate, type) - Tests a model using a test suite designed for testing models. 

#### `mongo.js`
##### Exported Values and Methods
* constructor(schema) - Takes and stores the schema to use.
* get(_id) - Returns a promise which will get the document matching the _id from Mongo, or all documents if no _id is provided.
* create(record) - Creates a record and returns a promise that will resolve with the newly created record.
* update(_id, record) - Returns a promise that resolves with the newly updated record from the Mongo DB.
* delete(_id) - Returns a promise that resolves once the document matching the _id is deleted from the Mongo DB.

#### `categories.js`
##### Extends Mongo model class
Simply passes in the Schema from categories-schema into the Mongo super constructor.

#### `products.js`
##### Extends Mongo model class
Simply passes in the Schema from products-schema into the Mongo super constructor

#### Running the app
* `npm test`
  
#### Tests
* `npm test`

#### UML
No
