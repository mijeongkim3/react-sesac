import React, { Component } from 'react';

export default class Test extends Component {
  render() {
    const name = '김미정';
    const style = {
      backgroundColor: 'blue',
      color: 'orange',
      fontSize: '40px',
      padding: '12px',
    };
    return (
      <div>
        <div style={style}>{name}</div>
      </div>
    );
  }
}
