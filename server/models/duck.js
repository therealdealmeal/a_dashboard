var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DuckSchema = new mongoose.Schema({
 name: String,
 age: Number
});
console.log("johny apple seed");
var Duck = mongoose.model('Duck', DuckSchema);
