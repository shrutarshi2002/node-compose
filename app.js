const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const amssg = "Its a Home Page";

var posts = [];
app.get("/uploade",function(req,res){
    res.render("uploade.ejs");
})

app.post("/uploade",function(req,res){
    const post = {
        title: req.body.postTitle,
        imagepost: req.body.image,
        itemprice: req.body.price,
        itemdesc: req.body.postBody
    };
    posts.push(post);

    res.redirect("/");

    
})



app.get("/",function(req,res){
    res.render("home",{posts:posts, heading:amssg});
})

app.get("*",function(req,res){
    res.render("uploade");

})
app.listen(3001,function(){
    console.log("server started at 3001");
})