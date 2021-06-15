import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react'

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
    }


    render() {
        return (
        <div>
            <h3>Click to add marker</h3>
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
        </div>
    );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAtSnkB2s8Hs8IaumG9PlYO4sPrDFSHMr0'
})(PostMap);