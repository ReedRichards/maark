import React, { Component } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";



class App extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Audiences" />
        <Tab label="Partners" />
        <Tab label="Brands" />
      </Tabs>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
};
export default App;
