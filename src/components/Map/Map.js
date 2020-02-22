import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.scss'

mapboxgl.accessToken = 'pk.eyJ1IjoibWF4ZGFuaWxvdiIsImEiOiJjazNkYTY2ZnEwdDZxM2NwOGJwN3hiMWZ6In0.EfNj3CDIoHMbo-pt3C_4oA';

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 53.9,
      lng: 27.5666700,
      zoom: 10
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div>
        <div className="mapContainer" ref={el => {this.mapContainer = el}} />
      </div>
    );
  }
}

export default Map;
