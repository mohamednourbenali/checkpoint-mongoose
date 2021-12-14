const express = require ('express');
const mongoose = require ('mongoose');

const app = express();
const PORT = process.env.PORT  || 8080;

// connect to mongoose
const MONGO_URI = "mongodb+srv://ben-ali:5aXpqBZ6xD6Xqqth@cluster0.p3f1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(MONGO_URI||'mongodb://localhost:27017/mern/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected !!!');
});

// Schema
const Schema = mongoose.Schema;
const PersonSchema = new Schema({
    name : String,
    age: Number,
    favoriteFoods: [String]
});

// Model
const Person = mongoose.model('Person',PersonSchema); 

// saving data to mongoose database
Person.create([{name : "eya ben ali",age:33,favoriteFoods:["rouz","makrouna"]},{name:"aziza",age:45,favoriteFoods:["3ejja",hargma]}]);

// Search database
    // find all documents
await Person.find({}).exec();

    // find one person
await Person.findOne({favoriteFoods:["makrouna"]}).exec();

    // find by id
await Person.findById("619b748e18c3536d94aee64c").exec();

    // find and update
await Person.findOneAndUpdate({
    name:'mohamed nour'
},{age : 20},{new:true}
    .then(doc=>{console.log(dod);}))
    .catch((error)=>{console.log(error)});

    // findByIdAndRemove
await Person.findByIdAndRemove('619b748e18c3536d94aee64c',function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Deleted : ", docs);
    }
});

    // Remove
await Person.remove({name : "Mary"},function (err, result) {
    if (err){
        console.log(err)
    }else{
        console.log("Result :", result) 
    }
});


app.listen(PORT,console.log(`server is running on port ${PORT}`));


