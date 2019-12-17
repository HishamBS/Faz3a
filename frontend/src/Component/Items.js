import React, { Component } from 'react'
import { Checkbox } from 'antd'

export default class Items extends Component {

    onChange = (e) => {
        this.props.isChecked(this.props.items._id)
        console.log(`checked = ${e.target.checked}`);
    }
    render() {
        return (
            <div>
                {
                    this.props.items.item_status== "available"?
                    <Checkbox onChange={this.onChange}>{this.props.items.item_name}</Checkbox>:
                    <Checkbox defaultChecked disabled  onChange={this.onChange}>{this.props.items.item_name}</Checkbox>
                }
            </div>
        )
    }
}
