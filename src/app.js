const express=require('express')
const hbs=require('hbs')
const path=require('path')

const app=express();
const weatherData=require("../utils/weatherData");

const publicPath=path.join(__dirname,"../public");
const viewsPath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");

const port=process.env.PORT || 4500;

app.set("view engine","hbs")
app.set("views",viewsPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicPath))

app.get("/",(req,res)=>{
    res.render("index",{title:"Weather App"})
});

app.get("/weather",(req,res)=>{
    if(!req.querry.address){
        res.send("Address is required")
    }

    weatherData(req.query.address,(error,result)=>{
        if(error){
            res.send(error)
        }
        res.send(result)
    })
});

app.get("*",(req,res)=>{
    res.render("404",{title:"page does not found"});
});

app.listen(port,() =>{
    console.log("Port is listening on "+port);
})