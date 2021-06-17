import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react'
const key = require("../../config/keys")

export class PostMap extends Component {
    constructor(props) {
        super(props)
        this.state = {center: {}, location: {}}
        this.addMarker = this.addMarker.bind(this)
        this.icons = {mfp: 'https://img.icons8.com/cotton/32/000000/fish-skeleton--v1.png', food: 'https://img.icons8.com/cotton/32/000000/street-food.png',
        fv: 'https://img.icons8.com/fluent/32/000000/group-of-vegetables.png', bread: 'https://img.icons8.com/cotton/32/000000/bread--v1.png'}
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
        this.setState({location: e.latLng})
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
                <Marker position={this.state.location} icon={this.icons[this.props.markerType]} draggable={true} onDragend={(mp, m, e) => this.props.action({latitude: e.latLng.lat(), longitude: e.latLng.lng()})}/>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: key.googleAPI
})(PostMap);