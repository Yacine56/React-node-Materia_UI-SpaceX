import {makeStyles} from "@material-ui/core/styles"

export const useStyle=makeStyles(theme=>({
           marker:{
            color: 'white', 
            backgroundColor: "#4158D0",
            backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
            padding: '10px 15px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            transform: 'translate(-50%, -50%)',
            border:"5px solid white",
            fontFamily:"Raleway",
            fontSize:"0.7rem",
            fontWeight:600
           }

}))