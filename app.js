const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/contactfzDB", {useNewUrlParser: true, useUnifiedTopology: true});

const contactSchema = {
    name: String,
    email: String,
    phone: String,
    message: String 
};

const Contact = new mongoose.model("Contact", contactSchema);

app.get("/", function(req, res){
    res.render("index");
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







app.listen(process.end.PORT || 3000, function(){
    console.log("El servidor esta corriendo en el puerto 3000");
});