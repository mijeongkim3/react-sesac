import React, { Component } from 'react'

export default class Ex9 extends Component {
  render() {
    const {text, valid }= this.props;
    return (
       
     <div>
       <h1>{text}</h1>
     </div>
    )
  }
}

Ex9.defaultProps = {
    text: '이건 기본 text props입니다',
  };
  