import React, { Component } from 'react'

export default class Msg extends Component {
    render() {
        return (
            
            <div>
            {console.log(this.props)
            }
              <div class="container">
                        <h5>{this.props.obj.user2.nickname}:</h5>
                        {/* <p>{this.props.message.message}</p> */}
                        <span class="time-right">{this.props.obj.createdAt}</span></div>
                
            </div>
        )
    }
}
