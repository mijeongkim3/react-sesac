import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Test2 extends Component {
  render() {
    const style = {
      color: 'orange',
      fontSize: '40px',
      marginTop: '20px',
    };

    return (
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src={logo} alt="이미지" />
      </div>
    );
  }
}
