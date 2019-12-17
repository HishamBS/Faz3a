import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import NavBarComp from "./main/NavBarComp";
import Marker from "./MarkerSignUp";
import Chat from "./Chat";
import dotenv from "dotenv/config";
import { checkAuth, userdata } from "../Component/functionAuth";
import { Layout, Icon, Drawer, Button } from "antd";
import axios from "axios";
const { Content } = Layout;

export default class Map extends Component {
  state = {
    markers: [
      {
        name: "Current position",
        position: {
          lat: 37.77,
          lng: -122.42
        }
      }
    ],
    user: ""
  };
  componentDidMount() {}

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

  render() {
    checkAuth(this.props);
    // console.log(userdata());

    return (
      <div>
        <hr />
        <NavBarComp />
        <hr />
        <Content style={{ padding: "0 100px" }}>
          <br />
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_MAP_KEY
              }}
              defaultCenter={{ lat: 21.508411, lng: 39.173046 }}
              defaultZoom={18}
              options={this.getMapOptions}
            >
              {/* <Marker
                                lat={user.coordinates.lat}
                                lng={user.coordinates.long}
                                name={user.nickname}
                            /> */}
              <Marker
                lat={21.56795121366994}
                lng={39.11139584220223}
                title="Hisham"
                name="Hisham "
                color="Blue"
                onClick={this.props.onMarkerClick}
              />
              {/* {this.state.markers.map((marker, index) => (
                <Marker
                  position={marker.position}
                  draggable={true}
                  onDragend={(t, map, coord) =>
                    this.onMarkerDragEnd(coord, index)
                  }
                  name={marker.name}
                /> */}
              ))}
            </GoogleMapReact>
          </div>
          <div>
            <Chat />
          </div>
        </Content>
      </div>
    );
  }
}
