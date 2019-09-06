import React, {Component} from "react";
import { connect } from "react-redux";
import Header from '../miscellaneous/Header';
import Footer from '../miscellaneous/Footer';
import '../../static/stylesheets/home.css'
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
				<div class="wraper">
					<Header />
					<div class="mn_center">
						<div class="container">
							<div class="centered">
								<div class="mn_login">
									<h3>Welcome John Doe<span><a href="login.html">Not you?</a></span></h3>
									<div class="form-group">
										<div class="input-group"> <div class="input-group-addon"><img src="images/password.svg" alt=""/></div>
											<input type="password" class="form-control mn_input" name="password" id="password" placeholder="● ● ● ● ● ● ● ● ●" required value=""/>
										</div>
									</div>
									<div class="form-group">
										<div class="tf_sound1 ">
											<input type="checkbox" id="login"/>
											<label for="login">Keep me logged in</label>
										</div>
									</div>
									<div class="form-group">
										<input type="submit" name="submit" id="submit" value="LOGIN" class="btn btn-primary mn_button mn_top"/>
									</div>
									<div class="clearfix"></div>
									<div class="form-group_1">
										<a href="#">Forgot Password?</a>
									</div>
								</div>
							</div>
						</div> 
					</div>
					<Footer />
				</div>
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
