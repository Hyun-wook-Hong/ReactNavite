# 01 - 2021.04.12(월) ReactNavite 첫걸음  
   1. 프로젝트 설치 방법  
    1) 터미널에서 npm 스크립트를 실행할 수 있는 Node.js를 최신 버전으로 설치한다.  
    2) Tool으로 사용할 Visual Studio Code를 설치한다.  
    3) 폴더를 만들어서 VSCode에 프로젝트를 세팅한다.  
    4) 터미널에 하기 명령어를 입력한다.   
       >> npx create-react-app [프로젝트명]  
    5) 설치가 완료되면 [프로젝트명] 이름으로 React Native 프로젝트 생성이 완료된다.  
       React Native 프로젝트 생성 후 터미널에서 아래 순서로 명령어를 입력하면 프로젝트가 실행됨.  
       I) cd [프로젝트명] 폴더 → 2) npm start 명령어 입력  
    6) http://localhost:3000/ 이 주소에서 src/App.js를 이용해 코딩하라고 브라우저에 뜨면 성공  



  2. React 프로젝트 구조  
    1) node_modules: Node.js 관련 모듈 모음  
    2) public 폴더: 잘 변경되지 않는 static 파일 모음  
    3) src: html, css, javascript 소스 파일들  
      → App.js가 메인 페이지이며, 이 파일에서 코딩을 시작하면 됨  

    - 왜 Node.js를 설치해서 진행했나요?  
    create-react-app 라이브러리를 사용하여 리액트 프로젝트를 쉽게 생성하기 위함

     → 사용한 Node.js Tool  
      - npm: Node.js 터미널 명령 (package.json에서 수정 가능)  
      - npx: 리액트 세팅이 다 되어 있는 boilerplate, 프로젝트 생성을 쉽게 할 수 있도록 도와주는 라이브러리  

# 02 - 2021.04.13(화) React에서 HTML 대신 사용하는 JSX 문법  
    1. 태그에 클래스를 주고 싶으면 class가 아닌 className 사용
    - <div className="클래스명">
    - 함수는 이렇게
       function 함수(){
       return 100;
       }
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
# 03 - 2021.04.15(목) React에서 변수 선언하는 방법
     1. 변수를 선언한다.
     - 예시  
        let posts = "강남 고기 맛집"; //일반적인 자바스크립트 변수 선언하는 방식과 같음
     2. state를 선언한다.
        let[title, changeTitle] = useState(['홍대 일렉기타 리페어샵 추천', '상수역 앞 우동 맛집 추천', '이주의 업데이트 내역']);
        다음의 구조와 같다 → [변수명(배열로도 선언 가능), 데이터 변경시 사용할 함수명]
        
     - state 선언하는 순서
       1) 최상단에 useState 선언문 작성
          import React, { useState } from 'react';
       2) 위와같은 방식으로 state 작성해서 선언

      * 추가 과제: 3개의 List 작성, 오늘 날짜는 자바스크립트로 현재 시간/요일을 불러오도록 작성해놓음
       
출처 링크: https://www.youtube.com/watch?v=nahwuaXmgt8
