import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Board() {
  return (
    <>
      <Header />
      <h1>게시판 페이지 입니다</h1>;
      <Link to="1">
        <h2>게시글 1번 보여주기</h2>
      </Link>
      <Link to="2">
        <h2>게시글 2번 보여주기</h2>
      </Link>
    </>
  );
}

//  link to ="1"은 localhost:3000/board/1이고  link to ="/1"이면은 localhost:3000/1
