import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import NavBarComp from "./main/NavBarComp";
import MarkerSignUp from "./MarkerSignUp";
import { checkAuth } from "../Component/functionAuth";
import { Layout, Icon, Drawer, Button } from "antd";
import dotenv from "dotenv/config";

const { Content } = Layout;

export default class MapContainer extends Component {
  state = {};

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        console.log(position);
      },
      error => {
        console.error(error);
      }
    );
  }

  getMapOptions = maps => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }]
        }
      ]
    };
  };

  changeMarkerPosition = e => {
    this.setState({
      latitude: e.lat,
      longitude: e.lng
    });
    this.props.loc(this.state.latitude, this.state.longitude);
  };
  render() {
    //   console.log(this.state);

    return (
      <div>
        <Content style={{ padding: "0 100px" }}>
          <br />
          <div style={{ height: "50vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_MAP_KEY
              }}
              defaultCenter={{
                lat: this.state.latitude,
                lng: this.state.longitude
              }}
              showsMyLocationButton={true}
              defaultZoom={12}
              options={this.getMapOptions}
              onClick={this.changeMarkerPosition}
            >
              <MarkerSignUp
                lat={this.state.latitude}
                lng={this.state.longitude}
                name={"My Location"}
                color="Red"

                // onClick={this.props.onMarkerClick}
              />
            </GoogleMapReact>

            <br />
          </div>
        </Content>
      </div>
    );
  }
}
