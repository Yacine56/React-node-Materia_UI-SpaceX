const express= require("express")

const cors =require("cors")
const app= express()
const routes=require("./Routes/routes")

app.use(cors())
app.listen(5000)

app.use("/",routes)


