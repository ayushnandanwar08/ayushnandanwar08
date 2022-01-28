const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 80;
const path = require("path");
const bodyparser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect('mongodb+srv://root:pass22@cluster0.96ge0.mongodb.net/MyPortfolio?retryWrites=true&w=majority',{useNewUrlParser:true});


// define mongoose shema
var contactShema = new mongoose.Schema({  // creating schema
    name:String,
    phone:String,
    email:String,
    message:String
});

var Contact = mongoose.model('Contact',contactShema);  // ready to go collection/Model name is Contact - contacts

            
app.use("/static",express.static('static'));
app.use(urlencoded());

app.set('view engine','pug');
app.set("views",path.join(__dirname,'views'));

// ENDPOINTS routes
app.get('/',(req,res)=>{
    res.render("index.pug");
})
app.post('/',(req,res)=>{
    var MyData = new Contact(req.body);  // Contact object
    MyData.save().then(()=>{
        res.redirect('/');
    }).catch(()=>{
        res.status(400).send("Data was not saved");
    })
    // const params = {};
    // res.render("index.pug",params);
});
app.get('/admin',async (req,res)=>{
    const data = await Contact.find();
    const ojb = {contact: data};
    res.render('admin.pug',ojb);
})


app.listen(port,()=>{
    console.log("App is Running");
})
