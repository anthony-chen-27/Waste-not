import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react'
const key = require("../../config/keys")

// Class will be used to display to users a list of restaurants within their area
// Expects a prop locations which is an array of lat/lng values, will render the list of coordinates as markers on the map.
// Expects a prop zoom which is used to determine zoom level of the map
// Will grab center from user's current location
export class ShowMap extends Component {
    constructor(props) {
      super(props)
      this.state = {center: {}}
      this.zoom = {25: 10, 10: 12, 5: 13}
    }

    componentDidMount() {
      // if ("geolocation" in navigator) {
      //   const cb = (pos) => {
      //     this.setState({center: {lat: pos.coords.latitude, lng: pos.coords.longitude}})
      //     this.props.setCenter({lat: pos.coords.latitude, lng: pos.coords.longitude})
      //   }
      //   navigator.geolocation.getCurrentPosition(position => cb(position))
      // }
    }

    render() {
      if (!this.state.center) {
        return null
      }
      console.log(this.props.locations)
      return (
        <Map google={this.props.google}
            style={{width: '100%', height: '100%', position: 'relative'}}
            containerStyle={{width: '50%', height: '90vh'}}
            className={'map'}
            zoom={this.zoom[this.props.zoom]}
            center={this.state.center}
            streetViewControl={false}
            mapTypeControl={false}
            disableDoubleClickZoom={true}>
            {this.props.locations.map((coord, i) => <Marker key={i} position={coord}/>)}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: key.googleAPI
})(ShowMap);