import {makeStyles} from "@material-ui/core/styles"

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
}))