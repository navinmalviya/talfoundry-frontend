import React from 'react';
import Routes from "./Routes";
import { connect } from "react-redux";
import './App.css';

class App extends React.Component {
  render() {
    console.log(this.props)
    return <Routes />;
  }
}

const mapStateToProps = state => ({
  ...state
});
export default connect(mapStateToProps)(App)
