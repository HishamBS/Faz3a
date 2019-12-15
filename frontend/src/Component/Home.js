import React, { Component } from 'react'
import map from '../Image/map.png'
import NavBarComp from '../Component/main/NavBarComp'
import { Carousel, Layout, Breadcrumb} from 'antd';
const { Content} = Layout;

export default class Home extends Component {
    render() {
        return (
            <div >
                <br />
                <Content style={{ padding: '0 10px' }}>
                    <div style={{ background: '#fff', padding: 10, minHeight: 280 }}>
                    <Carousel autoplay effect="fade">
                    <div>
                        <img
                            className="d-block w-100"
                            src='https://images.unsplash.com/photo-1545428973-08cf928ce742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
                            alt="First slide"
                            style={{ height: "750px" }}
                        />
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src='https://images.unsplash.com/photo-1545428973-08cf928ce742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
                            alt="First slide"
                            style={{ height: "750px" }}
                        />
                    </div>
                </Carousel>
                    </div>
                    
                </Content>
               

                {/* <img src={map} alt='' />
                <Carousel autoplay effect="fade">
                    <div>
                        <img src='https://images.unsplash.com/photo-1545428973-08cf928ce742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='' />
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1545428973-08cf928ce742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='' />
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1545428973-08cf928ce742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='' />
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1545428973-08cf928ce742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='' />
                    </div>
                </Carousel>, */}
            </div>
        )
    }
}
