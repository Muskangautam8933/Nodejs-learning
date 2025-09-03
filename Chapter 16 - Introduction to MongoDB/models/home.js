const getDB = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;   
    this.photoUrl = photoUrl;
    this.description = description;
    this.id = id;
  }

  //this is how we update and insert  records
  save() {
    getDB
    
   
  }

  //this is how we fetch data
  static fetchAll() {
   
  }

  static findById(homeId) {
    
  }

  static deleteById(homeId) {
    
  }
