import React, { Component } from 'react'
import GoogleMapReact from "google-map-react";
import NavBarComp from "./main/NavBarComp";
import Marker from "./Marker";
import { checkAuth } from "../Component/functionAuth";
import { Layout, Icon, Drawer, Button } from "antd";
import dotenv from 'dotenv/config'

const { Content } = Layout;

export default class MapContainer extends Component {
    state ={
        latitude: 0,
        longitude: 0, 
        data: ''
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude : position.coords.latitude ,
                longitude : position.coords.longitude,
                data : this.props.data
            })
            // console.log(this.state.data);
            
        }, error => {
            console.error(error)
        })
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

    render() {
        return (
            <div>
                <Content style={{ padding: "0 100px" }}>
                    <br />
                    <div style={{ height: "50vh", width: "100%" }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: process.env.REACT_APP_MAP_KEY
                            }}
                            defaultCenter={{ lat: 21.508411, lng: 39.173046 }}
                            defaultZoom={12}
                            options={this.getMapOptions}
                        >
                            <Marker
                                lat={this.state.latitude}
                                lng={this.state.longitude}
                                name="Shahad "
                                color="Red"

                                onClick={this.props.onMarkerClick}
                            />
                        </GoogleMapReact>

                        <br />
                    </div>
                </Content>
            </div>
        )
    }
}
