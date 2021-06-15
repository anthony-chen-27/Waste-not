import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react'


// Class will be used to display to users a list of restaurants within their area
// Expects a prop locations which is an array of lat/lng values, will render the list of coordinates as markers on the map.
// Also expects a prop called center which is where the map will be centered on
// Defaults to San Francisco if center is not passed in
export class ShowMap extends Component {
    constructor(props) {
      super(props)
      this.state = {center: undefined}
    }

    componentDidMount() {
      if ("geolocation" in navigator) {
        const cb = (pos) => {
          console.log(pos.coords.latitude, pos.coords.longitude)
          this.setState({center: {lat: pos.coords.latitude, lng: pos.coords.longitude}})
        }
        navigator.geolocation.getCurrentPosition(position => cb(position))
      } else {
        this.setState({center: {lat: 40.854885, lng: -88.081807}})
      }
    }

    render() {
      if (!this.state.center) {
        return null
      }
      return (
        <Map google={this.props.google}
            style={{width: '800px', height: '500px', position: 'relative'}}
            className={'map'}
            zoom={13}
            initialCenter={this.state.center}
            streetViewControl={false}
            mapTypeControl={false}
            disableDoubleClickZoom={true}>
            {this.props.locations.map((coord, i) => <Marker key={i} position={coord}/>)}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAtSnkB2s8Hs8IaumG9PlYO4sPrDFSHMr0'
})(ShowMap);