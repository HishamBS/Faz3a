import React, { Component } from 'react'
import '../CSS/Marker.css';
import { Popover, Button } from 'antd'


export default class Marker extends Component {
    render() {
        const { color, name} = this.props;
        return (
            <div>
                 <Popover title={name} trigger="hover">
                    <div
                        className="pin bounce"
                        style={{ backgroundColor: color, cursor: 'pointer' }}
                        title={name}
                    />
                    <div className="pulse" />
                </Popover>
            </div>
        )
    }
}
