import { makeStyles } from '@material-ui/core/styles';


export const useStyle=makeStyles(theme=>({
   
    card:{
        border:"2px double white",
        marginTop:"5em",
        padding:"3em",
         "&:hover":{
             cursor:"pointer"
         }
    },
    text:{
        
        color:"white",
        fontSize:"1.1rem",
        fontFamily:"Raleway"
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