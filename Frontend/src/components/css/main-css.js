import { makeStyles } from '@material-ui/core/styles';


export const useStyle=makeStyles(theme=>({
   
    card:{
        border:"2px double black",
        marginTop:"5em",
        padding:"3em",
         "&:hover":{
             cursor:"pointer"
         },
         backgroundColor: "#000000",
          backgroundImage: "linear-gradient(147deg, #000000 0%, #2c3e50 74%)"  ,
          borderRadius:"10px",
          
    },
    text:{
        
        color:"white",
        fontSize:"1.1rem",
        fontFamily:"Raleway",
        marginBottom:"0.5em"
    },
    titles:{
      fontFamily:"Raleway",
      textDecoration:"underline",
      fontSize:"1.5rem",
      color:"green"

    },
    first:{
        paddingRight:"2em"
    },
    progress:{
        fontSize:"10rem"
    }
}))