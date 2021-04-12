# 01 - 2021.04.12(월) ReactNavite 첫걸음  
- 프로젝트 설치 방법  
 1. 터미널에서 npm 스크립트를 실행할 수 있는 Node.js를 최신 버전으로 설치한다.  
 2. Tool으로 사용할 Visual Studio Code를 설치한다.  
 3. 폴더를 만들어서 VSCode에 프로젝트를 세팅한다.  
 4. 터미널에 하기 명령어를 입력한다.   
    >> npx create-react-app [프로젝트명]  
 5. 설치가 완료되면 [프로젝트명] 이름으로 React Native 프로젝트 생성이 완료된다.  
    React Native 프로젝트 생성 후 터미널에서 아래 순서로 명령어를 입력하면 프로젝트가 실행됨.  
    1) cd [프로젝트명] 폴더 → 2) npm start 명령어 입력  
 6. http://localhost:3000/ 이 주소에서 src/App.js를 이용해 코딩하라고 브라우저에 뜨면 성공  
  
  
  
- React 프로젝트 구조  
 1. node_modules: Node.js 관련 모듈 모음  
 2. public 폴더: 잘 변경되지 않는 static 파일 모음  
 3. src: html, css, javascript 소스 파일들  
  → App.js가 메인 페이지이며, 이 파일에서 코딩을 시작하면 됨  
  
- 왜 Node.js를 설치해서 진행했나요?  
create-react-app 라이브러리를 사용하여 리액트 프로젝트를 쉽게 생성하기 위함

  → 사용한 Node.js Tool  
   - npm: Node.js 터미널 명령 (package.json에서 수정 가능)  
   - npx: 리액트 세팅이 다 되어 있는 boilerplate, 프로젝트 생성을 쉽게 할 수 있도록 도와주는 라이브러리  
   -    
출처: 코딩애플님 유튜브  
링크: https://www.youtube.com/watch?v=nahwuaXmgt8
