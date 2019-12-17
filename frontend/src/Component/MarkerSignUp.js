import React from 'react';
import '../CSS/Marker.css';
import { Popover, Button } from 'antd'


const MarkerSignUp = (props) => {
    const { color, name, id } = props;
    return (
        <div>

            <div>
                <Popover title="Your Current Location , click anywhere to change it" trigger="hover">
                    <div
                        className="pin bounce"
                        style={{ backgroundColor: color, cursor: 'pointer' }}
                        title={props.name}
                    />
                    <div className="pulse" />
                </Popover>
            </div>
        </div>
    );
};

export default MarkerSignUp;