import React,{useEffect,useState} from "react"
import Grid from "@material-ui/core/Grid"
import axios from "axios"
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyle }from "./css/flight_details-css"
import { Typography } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const FlightDetails=props=>{
    const [data,setData]=useState({})
    const [images,setImages]=useState([])
    const [loading,setLoading]=useState(false)
    const classes=useStyle()
    const [selected,setSelected]=useState("") 
    const [index,setIndex]=useState(0)

    function checkURL(url) {
        return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(url);
    }

 useEffect(()=>{
    
    setLoading(true)
    const id = props.match.params.id
    axios.get(`http://localhost:5000/${id}`)
    .then(response=>{
      
        let query={"Flight Number":response.data.flight_number,"Mission Name":response.data.mission_name,"Launch date":response.data.launch_date_utc.split("T")[0]
       ,"Launch Status":response.data.launch_success ? "SUCCESS" : "FAILED","rocket":response.data.rocket.rocket_name,"rocket Type":response.data.rocket.rocket_type
       , Ships:response.data.ships,"Details":response.data.details,}  
      
       setData(query) 
       let image=[]
       response.data.links.flickr_images.map(i=>{
         return checkURL(i) && image.push(i)
      })
       setImages(image)
       setSelected(response.data.links.flickr_images[0])
     setLoading(false)
    }).catch(err=>{
        console.log(err)
        setLoading(false)
    })   
 

 },[props.match.params.id])


const nextImage=()=>{
    let i =index+1
    i===images.length ? setIndex(0) : setIndex(i) 
    setSelected(images[i===images.length ? 0 : i])

}

const previousImage=()=>{
    let i =index-1
     i<0 ? setIndex(images.length-1) : setIndex(i) 
    setSelected(images[i<0 ? images.length-1: i])

}





let content= loading ? <CircularProgress size="150px" style={{color:"white"}}/> : (
    <React.Fragment>
    <Grid item container direction="column" className={classes.content}>
    
   {Object.keys(data).map(key=>{
         return  (data[key].length!==0 &&  <Grid key={key} item container direction="row" className={classes.item}>
             <Grid item md className={classes.textRight} align="center">
                 <Typography className={classes.key}>
                      {key}
                    
                 </Typography>
            </Grid>
           <Grid item md align="center" alignContent="center" className={classes.textRight}>
             

                      {
                      !Array.isArray(data[key]) ?
                      <Typography className={classes.value} >
                    { data[key] }
                     </Typography>
                        :
                     <List >
                     { data[key].map(index=>{
                          return (
                              <React.Fragment>
                            <ListItem >
                            <ListItemText
                            align="center"
                            primary=  {<Typography className={classes.value} >
                                   * {index} *
                             </Typography>}
                            />
                            
                          </ListItem>
                          
                          </React.Fragment>
                          )
                      })}
                      </List>
                      }
             
           </Grid>
        </Grid>)
    })
}
         
       
        </Grid>
        <Grid item container direction="row" className={classes.imagesContainer} >
            
            {images.map((url,index)=>{
             return <img src={url} alt="rocket" className={classes.image} onClick={()=>{setSelected(url);setIndex(index)}} style={{border:selected===url && "3px solid green"}} />
                    
            })}
          
            </Grid> 
            <Grid item container direction="row" style={{justifyContent:"center"}}>
                <Grid item >
                       <i className={`${classes.arrow} ${classes.left}`} onClick={previousImage}></i>
                </Grid>
                <Grid item>
                <img src={selected} className={classes.imageBig} alt="Big" />
                </Grid>
                <Grid item>
                       <i className={`${classes.arrow} ${classes.right}`} onClick={nextImage}></i>
                </Grid>
                
            </Grid>
        </React.Fragment>
   
)


return(
   
        content
   
)

}


export default FlightDetails 