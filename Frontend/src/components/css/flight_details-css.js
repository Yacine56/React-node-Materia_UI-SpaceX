import { makeStyles } from '@material-ui/core/styles';


export const useStyle=makeStyles(theme=>({
    
   content:{
       border:"2px solid white",
    marginBottom:"3em"
   },
   item :{
    borderBottom:"2px solid white",
   },
   textRight:{
    borderRight:"1px solid white",
    padding:"1em 1em"
   },
   key:{
       color:"green",
       fontFamily:"Raleway",
       fontSize:"1.5rem"
   },
   value:{
       color:"white",
       fontFamily:"Raleway",
       fontSize:"1.5rem"
   },
   image:{
       width:"150px",
       height:"200px",
       margin:"1em",
       "&:hover":{
           cursor:"pointer"
       }
       
   },
   imagesContainer:{
       justifyContent:"center",
       padding:"0.5em",
       margin:"0 0 1em"
   },
   imageBig:{
       width:"600px",
       height:"750px",
       margin:"0 2em 3em"
   },
   arrow:{
    border: "solid white",
    borderWidth:" 0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
    color:"white",
    width:"50px",
    height:"50px",
    marginTop:"350px",
    "&:hover":{
        cursor:"pointer"
    }
  },
  
  right :{
    transform: "rotate(-45deg)",
    WebkitTransform: "rotate(-45deg)"
  },
  left :{
    transform: "rotate(135deg)",
    webkitTransform: "rotate(135deg)"
  }


}))