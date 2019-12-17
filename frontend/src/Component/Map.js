import React, { Component } from 'react'
import GoogleMapReact from "google-map-react";
import NavBarComp from "./main/NavBarComp";
import Marker_Services from "./Marker_Services";
import Chat from "./Chat";
import dotenv from 'dotenv/config'
import { checkAuth, userdata } from "../Component/functionAuth";
import { Layout, Icon, Drawer, Button } from "antd";
import Axios from "axios";
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
        user: []
    };
    componentDidMount() {
        Axios.get("/api/v1/users")
            .then(user => {
                var usersCord = user.data.map((single_user) => {
                    return single_user 
                })
                this.setState({
                    user: usersCord
                  })
                console.log(this.state.user);
            })
            .catch(err => console.log(err));
    }

    getMapOptions = () => {
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
        var users_markers = this.state.user.map((single_user) => {
            console.log(single_user.nickname);
            console.log(single_user.coordinates.lat);
            console.log(single_user.coordinates.long);

            
            return  <Marker_Services
                lat={single_user.coordinates.lat}
                lng={single_user.coordinates.long}
                name={single_user.nickname}
            /> 
        })
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
                            defaultZoom={15}
                            options={this.getMapOptions}
                        >
                            {users_markers}
            
                        </GoogleMapReact>
                    </div>
                    <div>
                    </div>
                </Content>
            </div>
        )
    }
}