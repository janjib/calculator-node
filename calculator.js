const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/",(req,res)=>{
    console.log(req.body)
    height = Number(req.body.height) 
    weight = Number(req.body.weight)
    bmi = weight / (height ** 2)
    res.send("Your bmi is " + bmi)
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})