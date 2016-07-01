import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export default class App extends Component {
  render() {

    return (
      <div>
        <h1>APP what</h1>
      </div>
    );
  }
}


// function mapState(state) {
//   return {
//     todos: state.todos
//   };
// }

// function mapDispatch(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   };
// }

// export default connect(mapState, mapDispatch)(TodoApp);

// export default connect(mapState, mapDispatch)(TodoApp);
