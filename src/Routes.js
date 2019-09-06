import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SignUp from './components/authentication/SignUp';
import SignUpStep2 from './components/authentication/SignUpStep2';
import EmailConfrimation from './components/miscellaneous/EmailConfirmation';
import UserLogin from './components/authentication/UserLogin';
import HomePage from './components/HomePage'
import UserLoginStep2 from "./components/authentication/UserLoginStep2";

class Routes extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        isAdmin: false
      };
    }
  

    render() {
      return (
        <Router>
          <div>
            {
              <div>
                  <Switch>
                    <Route exact={true} path={`/`} component={HomePage} />
                    <Route path={`/signup-step2`} component={SignUpStep2} />
                    <Route path={`/confrim-your-email`} component={EmailConfrimation} />
                    <Route path={`/login_page`} component={UserLogin} />
                    <Route path={`/user-signup`} component={SignUp} />
                    <Route path={`/login_page2`} component={UserLoginStep2} />
                  </Switch>
              </div>
            }
          </div>
        </Router>
      );
    }
  }
  
  const mapStateToProps = state => ({
    ...state
  });
  export default connect(
    mapStateToProps
  )(Routes);