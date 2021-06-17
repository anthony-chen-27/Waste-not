import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { connect } from "react-redux";
import { receiveSelectedRestaurant } from "../../actions/map_actions";

const key = require("../../config/keys");

// Class will be used to display to users a list of restaurants within their area
// Expects a prop locations which is an array of lat/lng values, will render the list of coordinates as markers on the map.
// Expects a prop zoom which is used to determine zoom level of the map
// Will grab center from user's current location
export class ShowMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {},
      showingInfoWindow: false,
      activeMarker: {},
    };
    this.zoom = { 25: 10, 10: 12, 5: 13 };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.icons = {
      mfp: "https://img.icons8.com/cotton/32/000000/fish-skeleton--v1.png",
      food: "https://img.icons8.com/cotton/32/000000/street-food.png",
      fv: "https://img.icons8.com/fluent/32/000000/group-of-vegetables.png",
      bread: "https://img.icons8.com/cotton/32/000000/bread--v1.png",
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      const cb = (pos) => {
        this.setState({
          center: { lat: pos.coords.latitude, lng: pos.coords.longitude },
        });
        this.props.setCenter({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      };
      navigator.geolocation.getCurrentPosition((position) => cb(position));
    }
  }

  handleClick() {
    if (this.state.showingInfoWindow) {
      this.setState({ showingInfoWindow: false, activeMarker: {} });
    }
  }

  onMarkerClick = (restaurantId) => (props, marker, e) => {
    this.setState({
        center: e.latLng,
      })
    this.props.setSelectedRestaurantId(restaurantId);
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
    });
  };

  render() {
    const markers = this.props.locations.map((rest) => (
      <Marker
        key={rest._id}
        position={{
          lat: rest.location.latitude,
          lng: rest.location.longitude,
        }}
        icon={this.icons[rest.category]}
        onClick={this.onMarkerClick(rest._id)}
        name={rest.name}
        description={rest.description}
      />
    ));
    const infoWindows = this.props.locations.map((rest, i) => {
      return (
        <InfoWindow
          visible={this.props.selectedRestaurantId === rest._id}
          position={{
            lat: rest.location.latitude,
            lng: rest.location.longitude,
          }}
          key={rest._id}
        >
          <div>
            <h1>{rest.name}</h1>
            <hr />
            <h2>{rest.description}</h2>
          </div>
        </InfoWindow>
      );
    });
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "100%", position: "relative" }}
        containerStyle={this.props.style}
        className={"map"}
        zoom={this.zoom[this.props.zoom]}
        center={this.state.center}
        streetViewControl={false}
        mapTypeControl={false}
        onClick={this.handleClick}
        disableDoubleClickZoom={true}
      >
        {markers}
        {infoWindows}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: key.googleAPI,
})(
  connect(
    ({
      ui: {
        map: { selectedRestaurantId },
      },
    }) => ({ selectedRestaurantId }),
    (dispatch) => ({
      setSelectedRestaurantId: (id) => dispatch(receiveSelectedRestaurant(id)),
    })
  )(ShowMap)
);
