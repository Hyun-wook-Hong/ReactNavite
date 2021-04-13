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
  let posts = { color : 'blue', fontSize : '30px' }
  /*전통적인 방식, 허나 굳이 이렇게 쓸 필요가 없다.*/
  //document.getElementById().innerHTML = ''?;
  function 함수(){
    return 100;
  }

  return (
    <div className="App">
      <div className="black-nav">
          <div style={ posts }>개발 Blog</div>
        </div>
        <h4> 강남 고기 맛집 </h4>
    </div>
  );
}

export default App;
