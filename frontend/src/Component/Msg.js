import React, { Component } from 'react'

export default class Msg extends Component {
    render() {
        return (
            <div>
              <div class="container">
                        <h5>{this.props.message.userName}:</h5>
                        <p>{this.props.message.message}</p>
                        <span class="time-right">{this.props.message.time}</span></div>
                
            </div>
        )
    }
}
