import React from 'react';
import styled from 'styled-components';

const MyButton = styled.a`
  position: relative;
  display: inline-block;
  cursor: Pointer;
  vertical-align: middle;
  text-decoration: nodeModuleNameResolver;
  line-height: 1.6em;
  font-size: 1.2em;
  padding: 1.25em 2em;
  background-color: ${(props) => props.mainColor};
  border: 2px solid ${(props) => props.subColor};
  border-radius: 0.75em;
  user-select: none;
  transition: transfor 0.15s ease-out; //첨에빨랐다가 천천히 움직이는
  transform-style: preserve-3d;
  margin-top: 1em;
  &::before {
    //클래스안주고도 자기자신을 가리치는게 앤드 이거 &.  자기자신선택자
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: ${(props) => props.subColor};
    border-radius: inherit;
    box-shadow: 0 0 0 2px;
    ${(props) => props.subColor};
    transform: translate3d(0, 0.75em, -1em);
  }
  &:hover {
    background: ${(props) => props.hoverColor};
    transform: translateY(0.25em);
  }
`;

export default function Button({
  text,
  clickEvent,
  mainColor,
  subColor,
  hoverColor,
}) {
  return (
    <MyButton
      onClick={clickEvent}
      mainColor={mainColor}
      subColor={subColor}
      hoverColor={hoverColor}
    >
      {text}
    </MyButton>
  );
}
