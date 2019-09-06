import React, {Component} from "react";
import { connect } from "react-redux";
import Header from '../miscellaneous/Header';
import Footer from '../miscellaneous/Footer';
import userLogo from '../../static/images/user.svg';
import {loginAction} from '../../Actions/loginActions';

class UserLogin extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
      <div>
		<Header/>
		<aside>
			<div className="row justify-content-center">
				<div className="col-12 col-md-8 col-lg-5 col-xl-3"> 
					<section className="sign-up-sec login-sec"> 
						<form>
							<div className="row">
								<div className="col-12">
									<h4 className="d-flex justify-content-center">Log in and get to work</h4>
								</div>
								<div className="col-12">
									<div className="form-group"> 
										<div className="input-group-addon"><img src={userLogo} alt="userLogo"/></div>
										<input type="text" className="form-control mn_input" name="Username" id="Username" placeholder="Username or Email" required value=""/>
										{/* <span className="warning-text">Assistive text</span> */}
									</div>
								</div>
							</div>
							<div className="row d-flex justify-content-center">
								<div className="col-12 col-md-8 col-lg-9 col-xl-9">
									<button type="submit" className="btn btn-block get-started-btn">continue</button>
								</div>
							</div>
						</form>
						<div className="already-account">
							<span>New to Upwork?</span>
						</div>
						<div className="row d-flex justify-content-center">
							<div className="col-12 col-md-6 col-lg-7 col-xl-7">
								<div className="col-12 text-center">
									<a href="javascript:void(0);" className="btn-block log-in-btn">Sign up</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</aside>
		<Footer />
    </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (data) => dispatch(loginAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
