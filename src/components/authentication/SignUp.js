import React, {Component} from "react";
import { connect } from "react-redux";
import Header from '../miscellaneous/Header';
import Footer from '../miscellaneous/Footer';
import userLogo from '../../static/images/user.svg'
import emailLogo from '../../static/images/email.svg'
import countryList from 'react-select-country-list';
import {addFirstStep} from '../../Actions/signUpStepsActions';

class SignUp extends Component {
  constructor(props, context) {
    super(props, context);
    this.countries = countryList().getData();
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
    };
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.emailRef = React.createRef();
    this.handleNext = this.handleNext.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleNext(e) {
    e.preventDefault();
    if(this.firstNameRef && this.lastNameRef && this.emailRef !== ""){
      const firstStepData = {
        firstName: this.firstNameRef.current.value,
        lastName: this.lastNameRef.current.value,
        email: this.emailRef.current.value
      }
      this.props.addFirstStep(firstStepData);
      this.props.history.push("/signup-step2");
    }else{
      alert("fields can not be empty!")
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    // debugger
  }
  render() {
    const {firstName, lastName, email} = this.props.signUpStep1
    return (
      <div>
        <Header/>
          <div>
            <aside>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-5 col-xl-4"> 
                  <section className="sign-up-sec"> 
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <h4 className="d-flex justify-content-center">Sign Up</h4>
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="input-group"> 
                            <div className="input-group-addon"><img src={userLogo} alt=""/></div>
                            <input type="text" className="form-control mn_input" ref={this.firstNameRef} name="firstName" id="Username" placeholder="First Name" required value={firstName} />
                          </div>
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="input-group"> 
                            <div className="input-group-addon"><img src={userLogo} alt=""/></div>
                            <input type="text" className="form-control mn_input" ref={this.lastNameRef} name="lastName" id="Username" placeholder="Last Name" required value={lastName} />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <div className="input-group mn_top"> 
                              <div className="input-group-addon"><img src={emailLogo} alt=""/></div>
                              <input type="email" className="form-control mn_input" name="email" ref={this.emailRef} id="Username" placeholder="Work Email Address" required value={email} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row d-flex justify-content-center">
                            <div className="col-12 col-md-6 col-xl-5 nopad">
                              <button className="btn btn-block get-started-btn" onClick={this.handleNext}>GET STARTED</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="already-account">
                      <span>Already have an account?</span>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 col-md-4 col-xl-4">
                        <div className="col-12 text-center">
                          <a href="javascript:void(0);" className="btn-block log-in-btn">LOGIN</a>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </aside>
            <Footer /> 
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signUpStep1: state.signUpSteps.signUpStep1,
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    addFirstStep: (data) => dispatch(addFirstStep(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
