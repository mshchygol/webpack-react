import React from 'react';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter } from '../actions/index';
import First from './First';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    incrementClick: () => {
      dispatch(incrementCounter())
    },
    decrementClick: () => {
      dispatch(decrementCounter())
    }
  }
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(First);

export default App;