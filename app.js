const mongoose = require("mongoose");

// Connect With mongoDB server
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true ,useUnifiedTopology: true });

// Designing Schema  for DB
const fruitsSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    nutrient_content: String
})

// Create a mongoose model.
const Fruit = mongoose.model("Fruit", fruitsSchema);    //mongoose converts the name to plural form to create a collection.
                                                        //eg. : Fruit becomes Fruits. 
// Creating document of the collection Fruits
const Fruit1 = new Fruit({
    name: "Apple",
    quantity: 30,
    nutrient_content: "Carbs"
});

// Fruit1.save(()=>{                     // to save the one instance
//     console.log("Inserted");
// });        

const Fruit2 = new Fruit({
    name: "Kiwi",
    quantity: 12,
    nutrient_content: "Proteins"
});

const Fruit3 = new Fruit({
    name: "Banana",
    quantity: 34,
    nutrient_content: "Vitamins"
});

const Fruit4 = new Fruit({
    name: "Watermelon",
    quantity: 20,
    nutrient_content: "Fibre"
});

// Inserting Many documents together
// Fruit.insertMany([Fruit4, Fruit2, Fruit3], function(err){
//     if(err){
//         console.log("Some problem occured");
//     } else {
//         console.log("Succesfully added fruits to fruitsDB");
//     }
// } );

// Getting back output to console
// Fruit.find(function(err, fruitsData){
//     if(err){
//         console.log(err);
//     } else {
//         fruitsData.forEach(element => {
//             console.log(element.name);
//         });
//     }
//     mongoose.connection.close();
// })

//Deleting a document
// Fruit.deleteOne({name: "Apple"},function(err){
//     if (err) {
//         console.log(err);
//     } else {
//     console.log("Deleted fruit");
//     }
// })


////        --------- Example-2-----------           ///

//schema for customers.
const personSchema = mongoose.Schema({
    name: String,
    age: Number,
    favourite_fruit: fruitsSchema
})

const Person = mongoose.model("Person",personSchema);

const person = new Person({
    name: "John",
    age: 48
})

const person2 = new Person({
    name: "Amy",
    age: 37,
    favourite_fruit: Fruit2
})

const person3 = new Person({
    name: "Sanya",
    age: 16
    // favourite_fruit: Fruit4
})

// person3.save();

// Person.insertMany([person, person2], function(err){
//     if(err){
//         console.log("Error occured. COuldn't insert People's data");
//     } else{
//         console.log("Inserted people");
//     }
// });

Person.updateOne({name:"Jake"}, {favourite_fruit: Fruit3}, function(err){
    if(err){
        console.log("Error"+err);
    } else {
        console.log("Updated person's fav fruit");
    }
})


