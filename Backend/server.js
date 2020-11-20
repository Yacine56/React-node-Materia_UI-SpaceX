const express= require("express")
const axios=require("axios")
const cors =require("cors")
const app= express()

app.use(cors())
app.listen(5000)

app.get("/:id",function(req,res){
    let id=req.params.id
    axios.get(`https://api.spacexdata.com/v3/launches/${id}`)
    .then(response=>{
            res.send(response.data)
    }).catch(err=>{
        console.log(err)
    })
})

app.get("/",function(req,res){
    axios.get("https://api.spacexdata.com/v3/launches")
    .then(response=>{
        res.send(response.data)
    }).catch(err=>{
        console.log(err)
    })

 
    
})
