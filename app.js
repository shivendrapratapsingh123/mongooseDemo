const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/fruitsdb");

const fruitSchema = new mongoose.Schema({
  name: 
  {
    type:String,
    required:[1,"please check your data entry,no name is specified!"] 
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "gauva",
  rating: 10,
  review: "pretty solid as a fruit",
});

// fruit.save().then(() => console.log('fruits for eating'));

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit:fruitSchema
});

const mango = new Fruit({
  name:"Mango",
  rating:9,
  review:"Decent fruit"
});

//  mango.save();

const Person = mongoose.model("Person", personSchema);


Person.updateOne({name:"John"},{favouriteFruit:mango},function(err){
  if(err)
  console.log(err);
  else
  console.log("Successfully added fruits to John");
});
//const person = new Person({ name: "Amy", age: 22,favouriteFruit:pineapple});
// person.save().then(() => console.log("showing person detail"));

//person.save();

const kiwi = new Fruit({
  name: "kiwi",
  score: 10,
  review: "two best fruit",
});

const orange = new Fruit({
  name: "orange",
  score: 4,
  review: "two sour fruit",
});

const banana = new Fruit({
  name: "banana",
  score: 3,
  review: "two weird texture",
});

// Fruit.insertMany([kiwi,orange,banana],function(err){
//   if(err)
//   {
//     console.log(err);
//   }
//   else{
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) console.log(err);
  else {
    mongoose.connection.close();
    fruits.forEach(function (fruit) {
      console.log(fruit);
    });
  }
});


// Fruit.updateOne({_id:"63a991ff4047c01a5975a6ff"},{name:"peach"},function(err){
//   if(err)
//   console.log(err);
//   else
//   console.log("successfully updated");
// });

// Fruit.deleteOne({name:"peach"},function(err){
//   if(err)
//   console.log(err);
//   else
//   console.log("successfully deleted");
// });



// Person.deleteMany({name:"John"},function(err){
//   if(err)
//   console.log(err);
//   else
//   console.log("successfully deleted");
// });