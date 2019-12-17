import React, { Component } from 'react'
import { Input , Card} from 'antd'

export default class Items extends Component {

    state = {
        checked: false,
        disabled: false,
      };

    onChange = (e) => {

        this.setState({
            checked: e.target.checked,
          });
  
        this.props.isChecked(this.props.items._id)
        console.log(`checked = ${e.target.checked}`);
    }
    render() {
        return (
            <div>
                <Card title={this.props.items.item_name}>
                    {this.props.items.item_description}
                </Card>
            </div>
            // <div>
            //     {
            //         this.props.items.item_status == "available"?
            //         <Checkbox onChange={this.onChange}>{this.props.items.item_name}</Checkbox>:
            //         <Checkbox defaultChecked disabled onChange={this.onChange}>{this.props.items.item_name}</Checkbox>
            //     }
            // </div>
        )
    }
}
