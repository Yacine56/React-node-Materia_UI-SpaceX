import React,{useEffect,useState,useContext} from "react"
import axios from "axios"
import {context} from "../context/context"
import CircularProgress from "@material-ui/core/CircularProgress"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import {useStyle} from "./css/main-css"

const UpcomingFlights=(props)=>{
    const [loading,setLoading]=useContext(context)
    const [data,setData] = useState([])
    const classes =useStyle()

useEffect(()=>{
    setLoading(true)
    axios.get("http://localhost:5000/upcoming")
    .then(response=>{
       setLoading(false)
       setData(response.data)
        console.log(response.data)
    }).catch(err=>{
        setLoading(false)
        console.log(err)
    })  

},[])

let content = loading ? <CircularProgress size="120px" style={{color:"white"}}/> 
                    : (

                        data.map(index=>{
                           
                        return(
                                  <Grid key={index.flight_number} item container className={classes.card} direction="row" >
                              <Grid item container direction="column" md className={classes.first}>
                              <Typography className={classes.titles}>flight number : </Typography>
                              <Typography className={classes.text}>{index.flight_number}</Typography> 
                              <Typography className={classes.titles}>mission name: </Typography>
                              <Typography className={classes.text}>{index.mission_name} </Typography>
                              <Typography className={classes.titles}>Launch date: </Typography>
                              <Typography className={classes.text}>{index.launch_date_utc.split("T")[0]} </Typography>
                              <Typography className={classes.titles}>site name:  </Typography>
                              <Typography className={classes.text}>{index.launch_site.site_name_long} </Typography> 
                              <Typography className={classes.titles}>rocket name:  </Typography>
                              <Typography className={classes.text}>{index.rocket.rocket_name} </Typography> 
                              <Typography className={classes.titles}>rocket type:  </Typography>
                              <Typography className={classes.text}>{index.rocket.rocket_type} </Typography> 
                              {index.details && <Typography className={classes.titles}>mission_details: </Typography>}
                              {index.details && <Typography className={classes.text}>{index.details} </Typography>}          
                            
                            </Grid>
                     {index.links.mission_patch &&       <Grid item md align="center">
                          <img src={index.links.mission_patch} alt="" style={{width:"60%",height:"300px"}}/>
                                     </Grid>}
                            
                        </Grid>      
                           )
                        }
                        
                        ))


      return (content)
}


export default UpcomingFlights