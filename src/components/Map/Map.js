import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWF4ZGFuaWxvdiIsImEiOiJjazNkYTY2ZnEwdDZxM2NwOGJwN3hiMWZ6In0.EfNj3CDIoHMbo-pt3C_4oA";

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0
    };
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/navigation-preview-day-v4",
      center: [this.state.lng, this.state.lat],
      zoom: 9
    });
    this.map.setCenter([this.props.placeOnMap.lng, this.props.placeOnMap.lat]);
  }

  render() {
    return (
      <div>
        <div
          className="mapContainer"
          ref={el => {
            this.mapContainer = el;
          }}
        />
      </div>
    );
  }
}

export default Map;
