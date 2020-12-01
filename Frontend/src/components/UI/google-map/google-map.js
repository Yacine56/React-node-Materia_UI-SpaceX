
import React from "react"
import {useStyle} from "./google-map-css"
import GoogleMapReact from 'google-map-react';

const GoogleMap=(props)=>{
const classes=useStyle()
const Marker=({text})=>(
    <div className={classes.marker}>
           {text}
    </div>
)


   return(
    <GoogleMapReact
    defaultCenter={props.center}
    defaultZoom={props.zoom}
  >
    <Marker 
      lat={props.center.lat} 
      lng={props.center.lng} 
      text={props.text} 
    />
  </GoogleMapReact>
   )
}


export default GoogleMap