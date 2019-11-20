import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = event => {
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={this.handleOnClick}>Delete</button>
      </div>
    );
  }
};

export default Band;
