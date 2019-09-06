import React, {Component} from "react";
import logo_1 from '../../static/images/logo_1.png'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="nav">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#"><img src={logo_1} alt="top-logo"/></a>    
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
