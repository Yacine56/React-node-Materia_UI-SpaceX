import React from "react"
import Grid from "@material-ui/core/Grid"
import {useStyle} from "./footer-css"
import footer_logo from "../../../assets/footer-logo.png"

const Footer=()=>{
 const classes=useStyle()

  return(
      <Grid item container className={classes.footer} >
            <Grid item >
              <img src={footer_logo} alt="" style={{width:"450px",height:"350px"}} />
            </Grid>
      </Grid>
  )
}

export default Footer 