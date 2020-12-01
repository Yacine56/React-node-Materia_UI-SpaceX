import React,{useState} from "react"
import Grid from "@material-ui/core/Grid"
import {useStyle} from "./header-css"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography"
import {Link } from "react-router-dom"

const Header=()=>{
 const classes=useStyle()
 const [value,setValue] =useState(0) 

 const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
      <Grid item container className={classes.header} >
           <Tabs value={value} onChange={handleChange} style={{marginLeft:"auto"}}>
           <Tab label={<Typography className={classes.tabText} >All Flights</Typography>} component={Link} to="/" />
          <Tab label={<Typography className={classes.tabText}>Launch Pads</Typography>} component={Link} to="/pads/pads" />
          <Tab label={<Typography className={classes.tabText}>Upcoming </Typography>} />   
        </Tabs>
      </Grid>
  )
}

export default Header 