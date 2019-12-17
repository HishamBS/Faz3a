import React, { Component } from 'react'

export default class Items extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.items.item_name}</h3>
            </div>
        )
    }
}
