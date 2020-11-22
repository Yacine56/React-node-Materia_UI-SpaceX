const axios =require("axios")



const get_flight =(req,res,next)=>{
    let id=req.params.id
    axios.get(`https://api.spacexdata.com/v3/launches/${id}`)
    .then(response=>{
            res.send(response.data)
    }).catch(err=>{
        console.log(err)
    })
}

const all_launches=(req,res,next)=>{
    axios.get("https://api.spacexdata.com/v3/launches")
    .then(response=>{
        res.send(response.data)
    }).catch(err=>{
        console.log(err)
    })
}

const upcoming_flights=(req,res,next)=>{
    axios.get("https://api.spacexdata.com/v3/launches/upcoming")
    .then(response=>{
        res.send(response.data)
    }).catch(err=>{
        console.log(err)
    })
}


exports.all_launches=all_launches
exports.get_flight=get_flight
exports.upcoming_flights=upcoming_flights