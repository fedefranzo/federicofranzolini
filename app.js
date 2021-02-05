const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://admin-federico:Patulina01@cluster0.rq3t7.mongodb.net/contactfzDB", {useNewUrlParser: true, useUnifiedTopology: true});

const contactSchema = {
    name: String,
    email: String,
    phone: String,
    message: String 
};

const Contact = new mongoose.model("Contact", contactSchema);

app.get('/', function(req, res) {
    res.render('index');
});

app.post("/",function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    const contact = new Contact ({
        name: name,
        email: email,
        phone: phone,
        message: message
    });

    contact.save(function(){
        res.redirect("/");
    });

});

// let port = process.env.PORT;
// if (port == null || port==""){
//    port==3000;
// };

app.listen(3000, function(){
    console.log("El servidor esta corriendo");
});

