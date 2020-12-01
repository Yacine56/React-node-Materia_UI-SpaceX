import React,{useEffect,useState} from "react"
import Grid from "@material-ui/core/Grid"
import {useStyle} from "./css/main-css"
import axios from "axios"
import  Typography from "@material-ui/core/Typography"
import CircularProgress from '@material-ui/core/CircularProgress';
import GoogleMap from "./UI/google-map/google-map"

const Launch_pads=()=>{
 const classes=useStyle()
 const [data,setData]=useState([])
 const [loading,setLoading]=useState(false)

 useEffect(()=>{
   setLoading(true)
      axios.get("http://localhost:5000/pads")
      .then(response=>{
        
        setData(response.data)
        setLoading(false)
      }).catch(err=>{
        setLoading(false)
        console.log(err)
      })
 },[])

 let content = loading ? <CircularProgress size="120px" style={{color:"white"}}/>
                       :<Grid item container direction="column" >
         
 {
  data.map(pad=>{
 
     return (<Grid item container direction="row" className={classes.card}>
      <Grid item container direction="column" md alignContent="center" style={{padding:"0em 2em"}}>
        <Typography className={classes.titles}> site Name :</Typography>
        <Typography className={classes.text}>{pad.site_name_long}</Typography>
        <Typography className={classes.titles}>Details :</Typography>
        <Typography className={classes.text}>{pad.details}</Typography>
        <Typography className={classes.titles}> status:</Typography>
        <Typography className={classes.text}>{pad.status}</Typography>
        <Typography className={classes.titles}>successful launches:</Typography>
        <Typography className={classes.text}>{pad.successful_launches}</Typography>
        <Typography className={classes.titles}>location:</Typography>
        <Typography className={classes.text}>{pad.location.name}, {pad.location.region}</Typography>
        </Grid>
     <Grid item style={{width:"100%",height:"400px"}} md>
              <GoogleMap center={{lat:pad.location.latitude,lng:pad.location.longitude}} text={pad.name.split(" ")[0]} zoom={11} />
                </Grid>
                </Grid>
   )
    }) 
 }
</Grid>
 
 return content
}

export default Launch_pads 