import {makeStyles} from "@material-ui/core/styles"

export const useStyle=makeStyles(theme=>({
      header:{
          position:"fixed",
          width:"100%",
          height:"4em",
          backgroundColor: "#000000",
          backgroundImage: "linear-gradient(147deg, #000000 0%, #2c3e50 74%)"  ,
         alignItems:"right",
         zIndex:1302
      }       ,
      tabText:{
          fontSize:"1.2rem",
          color:"white",
          fontFamily:"Raleway",
          fontWeight:600,

      }

}))