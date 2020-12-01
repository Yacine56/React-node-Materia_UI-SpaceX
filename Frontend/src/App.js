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
import Launch_pads from './components/launch_pads';
import Header from "./components/UI/header/header"

function App() {
const classes=useStyle()
const history=useHistory()
  return (
    <React.Fragment>
       <Header />
   <Grid container className={classes.container} direction="column">
  
    
   
   <Grid item onClick={()=>{history.push("/")}} >
         <img src={image} alt="" style={{
             cursor:"pointer"}} />
     </Grid>   
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/:id" exact component={FlightDetails} />
        <Route path="/upcoming_flights" exact component={Launch_pads} />
        <Route path="/pads/pads" exact component={Launch_pads} />
        <Redirect to="/" />
      </Switch>
      </Grid>
    </React.Fragment>
  );
}

export default App;
