import React from 'react';
import {
  useHistory,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Main from "./components/main"
import FlightDetails from "./components/flight_details"
import Grid from "@material-ui/core/Grid"
import image from "./assets/logo.jpg"
import {useStyle} from "./app-css"

function App() {
const classes=useStyle()
const history=useHistory()
  return (
    <React.Fragment>
   <Grid container className={classes.container} direction="column">
     <Grid onClick={()=>{history.push("/")}} >
         <img src={image} style={{
             cursor:"pointer"}} />
     </Grid>   
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/:id" exact component={FlightDetails} />
      </Switch>
      </Grid>
    </React.Fragment>
  );
}

export default App;