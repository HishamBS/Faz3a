import React from 'react';
import '../CSS/Marker.css';
import { Popover, Button } from 'antd'


const Mark = (props) => {
    const { color, name, id } = props;
    return (
        <div>
            <p>Name</p>

            <div>
                <Popover title="Shahad" trigger="hover">
                    <div
                        className="pin bounce"
                        style={{ backgroundColor: color, cursor: 'pointer' }}
                        title={name}
                    />
                    <div className="pulse" />
                </Popover>
            </div>
        </div>
    );
};

export default Mark;