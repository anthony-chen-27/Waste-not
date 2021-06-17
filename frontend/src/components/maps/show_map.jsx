import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
const key = require("../../config/keys")
const axios = require("axios")

// Class will be used to display to users a list of restaurants within their area
// Expects a prop locations which is an array of lat/lng values, will render the list of coordinates as markers on the map.
// Expects a prop zoom which is used to determine zoom level of the map
// Will grab center from user's current location
export class ShowMap extends Component {
    constructor(props) {
      super(props)
      this.state = {center: {}, showingInfoWindow: false, activeMarker: {}, data: {}}
      this.zoom = {25: 10, 10: 12, 5: 13}
      this.onMarkerClick = this.onMarkerClick.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.icons = {mfp: 'https://img.icons8.com/cotton/32/000000/fish-skeleton--v1.png', food: 'https://img.icons8.com/cotton/32/000000/street-food.png',
      fv: 'https://img.icons8.com/fluent/32/000000/group-of-vegetables.png', bread: 'https://img.icons8.com/cotton/32/000000/bread--v1.png'}
    }

    componentDidMount() {
      if ("geolocation" in navigator) {
        const cb = (pos) => {
          this.setState({center: {lat: pos.coords.latitude, lng: pos.coords.longitude}})
          this.props.setCenter({lat: pos.coords.latitude, lng: pos.coords.longitude})
        }
        navigator.geolocation.getCurrentPosition(position => cb(position))
      }
      
      const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
      axios.get(
          `${corsApiUrl}https://api.yelp.com/v3/businesses/search?categories=restaurants&location=newyork`,
          {
            headers: {
              Authorization: `Bearer _MEjTjHNWxEVuDgU5ORyIwogn5SFL3bwKY4d_8hLn54jEkGEyGhvBXyLXcznRC9PN7j1rqOH_JiFwuo01kou1zwYPEiYvHmu0-WQ_vt6UGDYII4UjHysn6bg84jLYHYx`,
            }
          }
        ).then(data => this.setState(data))
    
    }

    handleClick() {
      if (this.state.showingInfoWindow) {
        this.setState({showingInfoWindow: false, activeMarker: {}})
      }
    }

    onMarkerClick(props, marker, e) {
      this.setState({
        showingInfoWindow: true,
        selectedPlace: props,
        activeMarker: marker,
    })};

    render() {
      return (
        <Map google={this.props.google}
            style={{width: '100%', height: '100%', position: 'relative'}}
            containerStyle={this.props.style}
            className={'map'}
            zoom={this.zoom[this.props.zoom]}
            center={this.state.center}
            streetViewControl={false}
            mapTypeControl={false}
            onClick={this.handleClick}
            disableDoubleClickZoom={true}>
            {this.props.locations.map((rest, i) => 
            <Marker key={i} position={{lat: rest.location.latitude, lng: rest.location.longitude}} icon={this.icons[rest.category]} onClick={this.onMarkerClick} 
              name={rest.name}
              description={rest.description}/>)}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.activeMarker.name}</h1>
                <hr />
                <h2>{this.state.activeMarker.description}</h2>
              </div>
          </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: key.googleAPI
})(ShowMap);