import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import NavBarComp from './main/NavBarComp'
import Marker from './Marker'
import Chat from './Chat'

import { Layout, Icon, Drawer, Button } from 'antd';
const { Content } = Layout;
const Map = (props) => {
    const [center, setCenter] = useState({ lat: 21.508411, lng: 39.173046 });
    const [zoom, setZoom] = useState(18);

    const getMapOptions = (maps) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
    };

    const onMarkerClick = () => {
        alert("hi")
    }

    return (
        <div >
            <hr />
            <NavBarComp />
            <hr />
            <p>Click the button to get your coordinates.</p>

            <Button onclick={() => console.log('clock')}>Try It</Button>
            
        <p id="demo"></p>
        <Content style={{ padding: '0 100px' }}>
            <br />
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCfa0ZQC2Y4BKyvZyogVLkBmL3HW3Si5tk' }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                    options={getMapOptions}
                >
                    <Marker
                        lat={21.508411}
                        lng={39.173046}
                        name="Shahad"
                        color="Red"
                        onClick={props.onMarkerClick}
                    />
                    <Marker
                        lat={21.509343}
                        lng={39.173781}
                        title="Hisham"
                        color="Blue"
                        onClick={props.onMarkerClick}
                    />
                </GoogleMapReact>
            </div>
            <div >
                <Chat />

            </div>
        </Content>
        </div >

    );
}

export default Map;
