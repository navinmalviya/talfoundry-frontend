import React, {Component} from "react";
import { connect } from "react-redux";
import Header from '../miscellaneous/Header';
import Footer from '../miscellaneous/Footer';
import countryList from 'react-select-country-list';
import {signUpAction} from '../../Actions/signUpActions';
import earthLogo from '../../static/images/globe-earth.png';
import passwordLogo from '../../static/images/password.svg';
import {addSecondStep} from '../../Actions/signUpStepsActions';

class SignUpStep2 extends Component {
  constructor(props, context) {
    super(props, context);
    this.countries = countryList().getData();
    this.countryRef = React.createRef();
    this.passwordRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.state = {
      confirmPassword: null,
      country: null,
      role: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }
  handleChange(e) {
    const secondStepData = {
      country: this.countryRef.current.value,
      password: this.passwordRef.current.value,
      role: ""
    }
    if(e.target.name==="freelancer"){
      secondStepData.role = "freelancer"
    }else if(e.target.name==="projectManager"){
      secondStepData.role = "projectManager"
    }else{
      this.setState({[e.target.name]: e.target.value});
    }
    this.props.addSecondStep(secondStepData);
  }
  checkPassword() {
    if(this.passwordRef.current.value !== this.state.confirmPassword){
      alert("password don't match!")
    }
  }
  handleSubmit() {
    if(this.passwordRef.current.value !== this.state.confirmPassword){
      alert("passwords don't match!")
    }else if(!this.checkboxRef.current.checked){
      alert("please check the checkbox!")
    }else if(this.countryRef.current.value === "" && this.passwordRef === ""){
      alert("fields can't be empty!")
    }else{
      const {country, password, role} = this.props.signUpSteps.signUpStep2;
      const {firstName, lastName, email} = this.props.signUpSteps.signUpStep1;
      var formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("country", country);
      formData.append("role", role);
      signUpAction(formData)
      .then((res)=>{
        this.props.history.push({
          pathname: '/confrim-your-email',
          state: email
        })
      })
    }
  }
  render() {
    const {email, password, confirmPassword} = this.state
    let countriesList = this.countries.length > 0
      && this.countries.map((item, i) => {
      return (
        <option key={i} value={item.label}>{item.label}</option>
      )
    }, this);
    return (
      <div>
        <Header/>
        <div>
          <header>
            <nav className="navbar">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#"><img src="images/logo_1.png" alt=""/></a>    
                </div>
              </div>
            </nav>
          </header>
          <aside>
            <div className="row justify-content-center">
              <div className="col-12 col-md-7 col-lg-5 col-xl-3"> 
                <section className="complete-accout-section"> 
                  <form>
                    <div className="row">
                      <div className="col-12 text-center">
                        <h4>Complete your account</h4>
                        <p>{email}</p>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <div className="input-group-addon"><img src={earthLogo} alt="earthL" /></div>
                          <select className="custom-select" ref={this.countryRef}  name="country">
                            {countriesList}
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group"> 
                          <div className="input-group-addon"><img src={passwordLogo} alt="passL" /></div>
                          <input type="password" className="form-control mn_input" name="password" id="Username" placeholder="● ● ● ● ● ● ● ● ●" value={password} ref={this.passwordRef} onChange={this.handleChange}/>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <div className="input-group mn_top"> 
                            <div className="input-group-addon"><img src={passwordLogo} alt="passL" /></div>
                            <input type="password" className="form-control mn_input" name="confirmPassword" id="Username" placeholder="confirm password" value={confirmPassword} onBlur={this.checkPassword} onChange={this.handleChange} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="i-want-to">
                    <h5 className="text-center">I want to:</h5>

                    <div className="row">
                      <div className="col-12">
                        {/* Nav tabs */}
                        <ul className="nav nav-pills justify-content-center" id="myTab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="hire-tab" data-toggle="tab" href="#hire" role="tab" aria-controls="hire" aria-selected="true" name="projectManager" onClick={this.handleChange}>Hire for Project</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="freelancer-tab" data-toggle="tab" href="#freelancer" role="tab" aria-controls="freelancer" aria-selected="false" name="freelancer" onClick={this.handleChange}>Work as a Freelancer</a>
                          </li>
                        </ul>

                        {/* <!-- Tab panes --> */}
                        <div className="tab-content">
                          <div className="tab-pane active" id="hire" role="tabpanel" aria-labelledby="hire-tab">

                          </div>
                          <div className="tab-pane" id="freelancer" role="tabpanel" aria-labelledby="freelancer-tab">
                            <div className="form-group">
                              <div className="input-group-addon"><img src="images/user-face.jpg" alt="" /></div>
                              <img src="images/chevron-down.png" className="down-arrow" alt=""/>
                              <select className="custom-select">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="customCheck1" ref={this.checkboxRef}/>
                          <label className="custom-control-label" for="customCheck1">Yes, I understand and agree to the </label> <a href="javascript:void(0);">Talfoundry Term of Service</a>, including the <a href="javascript:void(0);">User Agreement</a> and <a href="javascript:void(0);">Privacy Policy</a>.
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-12">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 col-md-6 col-xl-5 nopad">
                        <button type="submit" className="btn btn-block get-started-btn" onClick={this.handleSubmit}>CONTINUE</button>
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

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = (dispatch) => {

  return {
    addSecondStep: (data) => dispatch(addSecondStep(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpStep2);
