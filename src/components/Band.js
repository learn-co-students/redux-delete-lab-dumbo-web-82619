import React, { Component } from 'react';

class Band extends Component {

  handleOnclick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnclick}>
          Delete</button>
      </div>
    );
  }
};

export default Band;
