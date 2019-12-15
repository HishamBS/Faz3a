import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import { Layout } from 'antd';
const { Content } = Layout;

const Map = (props) => {
    const [center, setCenter] = useState({lat: 21.508411, lng: 39.173046});
    const [zoom, setZoom] = useState(11);
    
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
        </Content>
    );
}

export default Map;

// import React, { Component } from 'react'
// import GoogleMapReact from 'google-map-react';
// import { Layout} from 'antd';
// const { Content} = Layout;

// const AnyReactComponent = ({text}: any) => <div>{text}</div>;
// const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
// const [zoom, setZoom] = useState(11);

// export default class Map extends Component {
//     static defaultProps = {
//         center: { lat: 21.54238, lng: 39.19797 },
//         zoom: 12
//     }

//     render() {
//         return (
//             <Content style={{ padding: '0 100px' }}>
//                 <br />
//             <div style={{ height: '90vh', width: '100%' }}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: 'AIzaSyCfa0ZQC2Y4BKyvZyogVLkBmL3HW3Si5tk' }}
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}
//                 >
//                     {/* <Map
//                         lat={59.955413}
//                         lng={30.337844}
//                         text="My Marker"
//                     /> */}
//                 </GoogleMapReact>
//             </div>
//             </Content>
//         )
//     }
// }
