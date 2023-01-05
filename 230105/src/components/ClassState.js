import React, { Component } from "react";

export default class ClassState extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       teacher: "이효석",
  //     };
  //   }

  state = {
    teacher: "이효석",
  };
  render() {
    const { teacher } = this.state; //구조분해할당   const teacher = this.state.teacher;랑 저거랑 똑같음

    return (
      <div>
        <button onClick={() => this.setState({ teacher: "tetz" })}>
          영어로!
        </button>
        <br />
        <span>{teacher}</span>
      </div>
    );
  }
}

//rcc
//this.state에는 반드시 객체로. 클래스형컴포넌트
