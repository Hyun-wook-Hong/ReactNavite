import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /*
    React.js JSX 문법 규칙

    1. 태그에 클래스를 주고 싶으면 class가 아닌 className 사용
    <div className="클래스명">
    2. JSX가 HTML보다 편리한 이유: 데이터 바인딩이 쉽다. (그래서 React, Angular, Vue를 많이 쓴다)
       → 데이터 바인딩: 서버에서 가져온 데이터를 브라우저, UI 등에 보여주는 것
        1) { 변수명, 함수 등 }
        2) 이미지 src, id, href 등에도 { 변수명, 함수 등 }
        3) 클래스도 넣을 수 있음, 우리가 상상하는 모든 것을 넣을수 있다.
    3. JSX에서 스타일 집어 넣을때: 
      style = { {object 자료형으로 만든 스타일 } }
       여러개 → 맨 오른쪽 element는 string, 하이픈(-) 구분자를 사용할 수 없으니 camelCase로 작명해야함
      style = { {color: 'blue', fontSize: '30px'  } }
            → 이렇게 만들면 귀찮고.. className을 주로 만들어 쓴다
        */
  //let posts = { color : 'blue', fontSize : '30px' }
  /*전통적인 방식, 허나 굳이 이렇게 쓸 필요가 없다.*/
  //document.getElementById().innerHTML = ''?;

  // React에서 변수는
  // 1) 변수 선언을 하거나
  // 2) state 선언을 하면 된다

  // 1. state는 변수 대신 사용하는 데이터 저장 공간이다.
  // 배열처럼 선언하되, 변수명, 데이터 변경시 사용할 함수명을 같이 선언할 수 있다.
  // 2. useState() 함수를 이용해 만들어야 한다.
  let[title, changeTitle] = useState(['홍대 일렉기타 리페어샵 추천', '상수역 앞 우동 맛집 추천', '이주의 업데이트 내역']); //[a,b];
  // a: '남자 코트 추천' - title
  // b: 남자 코트 추천 state 정정해주는 함수 0 changeTitle

  // 왜 쓰나요?
  // 리액트 웹 페이지가 Application처럼 동작할 수 있도록 만들 수 있기 위해 state를 사용함
  // state는 변경되면 HTML이 *재렌더링*됨 → 새로고침 하지 않고도 Smooth하게 HTML을 변경할 수 있다는 의미

  // 그러므로 자주 바뀌는, 중요한 데이터는 state를 사용하면 좋다

  /*
    React에 있는 내장 함수를 하나 쓰겠습니다 (state 선언)
  */
  let posts = "강남 고기 맛집";
  function whatDayisItToday(day){
    switch(day){
      case 1:
        return "(월)"
      case 2:
        return "(화)"
      case 3:
        return "(수)"
      case 4:
        return "(목)"
      case 5:
        return "(금)"
      case 6:
        return "(토)"
      case 7:
        return "(일)"        
      }     
  }

  let today = new Date();

  let year = today.getFullYear(); //연도
  let month = today.getMonth();   //달
  let date = today.getDate();     //날짜
  let day = today.getDay();       //요일 (숫자)

  let day_str = whatDayisItToday(day);



  return (
    <div className="App">
      <div className="black-nav">
          <div>개발 Blog</div>
        </div>
        <div className="list">
        <h3> { title[0] } </h3>
        <p> { "발행일: " + year + "/" + month + "/" + date + " " + day_str } </p>
        <hr/>
        <h3> { title[1] } </h3>
        <p> { "발행일: " + year + "/" + month + "/" + date + " " + day_str } </p>
        <hr/>
        <h3> { title[2] } </h3>
        <p> { "발행일: " + year + "/" + month + "/" + date + " " + day_str } </p>
        <hr/>
        </div>
    </div>
  );
}

export default App;
