import React, { Component } from 'react'

export default class FooterComp extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex', textAlign: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2019 All Rights Reserved </p>
                    </div>

                </div>
                <div class="col-md-4 col-sm-6 col-xs-12" >
                    <ul class="social-icons" style={{ display: 'flex', textAlign: 'center', alignContent: 'center', justifyContent: 'center' }}>
                        <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                        <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
