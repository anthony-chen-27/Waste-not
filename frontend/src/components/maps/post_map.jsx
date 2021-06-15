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
        } else {
            this.setState({center: {lat: 40.854885, lng: -88.081807}})
        }
    }

    addMarker(mapProps, map, e) {
        this.setState({marker: <Marker position={e.latLng} draggable={true}/>})
        this.props.updatePos({lat: e.latLng.lat(), lng: e.latLng.lng()})
    }


    render() {
        return (
            <Map google={this.props.google}
                style={{width: '800px', height: '500px', position: 'relative'}}
                className={'map'}
                zoom={13}
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