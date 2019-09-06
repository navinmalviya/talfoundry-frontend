import React, {Component} from "react";
import { connect } from "react-redux";
import logo_1 from '../../static/images/logo_1.png'
import HPLogo from '../../static/images/Hewlett-Packard-Enterprise.png'
import UCSFLogo from '../../static/images/UCSF-logo.png'
import thumbtack from '../../static/images/thumbtack.png'
import udemy from '../../static/images/udemy.png'
import shopify from '../../static/images/shopify.png'
import motorola from '../../static/images/motorola.png'
import mailLogo from '../../static/images/email-confirmation.png'

class EmailConfirmation extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
	  debugger
    return (
      <div>
        <aside>
			<section className="confirm-your-mail">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-12 col-md-7 col-lg-7 col-xl-7">
							<div className="text-center">
							<img src={logo_1} className="product-logo" alt="logo"/>
							<img src={mailLogo} className="email-confirm" alt="mailLogo"/>
							<p className="page-head">Confirm Your Email</p>
							<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <a href="javascript:void(0);" title="">{this.props.location.state}</a> do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nisi ut aliquip ex ea commodo consequat, <a href="javascript:void(0);" title="" className="click-here">click here to resend it.</a></span>
							</div>
						</div>
						<div className="col-12">
							<div className="top-companies text-center">
								<p>Work with top companies</p>
								<ul>
									<li><img src={HPLogo} alt="Hplogo"/></li>
									<li><img src={UCSFLogo} alt="UCSF"/></li>
									<li><img src={thumbtack} alt="thumb"/></li>
									<li><img src={udemy} alt="udemy"/></li>
									<li><img src={shopify} alt="shopify"/></li>
									<li><img src={motorola} alt="motorola"/></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(EmailConfirmation);
