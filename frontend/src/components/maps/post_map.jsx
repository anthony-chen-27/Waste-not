import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react'
const key = require("../../config/keys")

export class PostMap extends Component {
    constructor(props) {
        super(props)
        this.state = {center: {}, marker: undefined}
        this.addMarker = this.addMarker.bind(this)
      }
  
    componentDidMount() {
      if ("geolocation" in navigator) {
        const cb = (pos) => {
          this.setState({center: {lat: pos.coords.latitude, lng: pos.coords.longitude}})
        }
        navigator.geolocation.getCurrentPosition(position => cb(position))
      }
    }

    addMarker(mapProps, map, e) {
        let self = this
        this.setState({marker: <Marker position={e.latLng} draggable={true} onDragend={(mp, m, e) => this.props.action({latitude: e.latLng.lat(), longitude: e.latLng.lng()})}/>})
        this.props.action({latitude: e.latLng.lat(), longitude: e.latLng.lng()})
    }

    render() {
        return (
            <Map google={this.props.google}
                style={{width: '100%', height: '100%', position: 'relative'}}
                containerStyle={this.props.style}
                className={'map'}
                zoom={14}
                center={this.state.center}
                streetViewControl={false}
                mapTypeControl={false}
                disableDoubleClickZoom={true}
                onDblclick={this.addMarker}>
                {this.state.marker}
            </Map>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: key.googleAPI
})(PostMap);