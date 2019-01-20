import React, { Component } from 'react';
import './showingApps.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as showingAppsActionFunctions from "./showingAppsActions"
import PropTypes from 'prop-types';

class ShowingApps extends Component {

  componentWillMount() {
    console.log('Component will mount');
  }

  triggerDispatch = () => {
    const { showingAppsActions } = this.props;
    console.log('trigger dispatch function has been triggered');
    showingAppsActions.something();
  }

  render() {
    return (
      <div className="container something">
          Showing the Apps
          <br /><br /><br />
          <button onClick={this.triggerDispatch}> Trigger the dispatch </button>
      </div>
    );
  }
}

ShowingApps.propTypes = {
  showingAppsActions : PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    something: state.applicationData.languages
  }
};

const mapDispatchToProps = (dispatch) => ({
  showingAppsActions: bindActionCreators(showingAppsActionFunctions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowingApps);
