import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
const key = require("../../config/keys")

// Class will be used to display to users a list of restaurants within their area
// Expects a prop locations which is an array of lat/lng values, will render the list of coordinates as markers on the map.
// Expects a prop zoom which is used to determine zoom level of the map
// Will grab center from user's current location
export class ShowMap extends Component {
    constructor(props) {
      super(props)
      this.state = {center: {}, showingInfoWindow: false, activeMarker: {}, selectedPlace: {}}
      this.zoom = {25: 10, 10: 12, 5: 13}
      this.onMarkerClick = this.onMarkerClick.bind(this)
    }

    componentDidMount() {
      if ("geolocation" in navigator) {
        const cb = (pos) => {
          this.setState({center: {lat: pos.coords.latitude, lng: pos.coords.longitude}})
          this.props.setCenter({lat: pos.coords.latitude, lng: pos.coords.longitude})
        }
        navigator.geolocation.getCurrentPosition(position => cb(position))
      }
    }

    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    render() {
      if (!this.state.center) {
        return null
      }
      console.log(this.props.locations)
      return (
        <Map google={this.props.google}
            style={{width: '100%', height: '100%', position: 'relative'}}
            containerStyle={this.props.style}
            className={'map'}
            zoom={this.zoom[this.props.zoom]}
            center={this.state.center}
            streetViewControl={false}
            mapTypeControl={false}
            disableDoubleClickZoom={true}>
            {this.props.locations.map((rest, i) => 
            <Marker key={i} position={{lat: rest.location.latitude, lng: rest.location.longitude}} icon='https://i.imgur.com/hOEcWOH.png' onClick={this.onMarkerClick} 
              name={rest.name}
              description={rest.description}/>)}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
                <hr />
                <h2>{this.state.selectedPlace.description}</h2>
              </div>
          </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: key.googleAPI
})(ShowMap);