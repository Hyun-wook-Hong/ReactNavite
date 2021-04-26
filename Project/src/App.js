import React from 'react';

// 부모 컴포넌트 -> 자식 컴포넌트로 데이터를 보내는 것이 가능하다.

function FootballPlayer({ name, picture }){
  return( 
    <div>
      <h2>Name: {name}</h2>
      <img src= { picture } style={ {weight: '640px', height: '640px'} }/>
    </div>

    )
}

const playersILike = [
  {
    name: "Heung-min Son",
    image: "https://img.olympicchannel.com/images/image/private/t_16-9_1920/primary/c9esw7mzofm5paatdci5"
  },
  {
    name: "Gareth Bale",
    image: "https://staticg.sportskeeda.com/editor/2020/10/2a48a-16040719703426-800.jpg"
  }, 
  {
    name: "Harry Kane",
    image: "https://cdn-wp.thesportsrush.com/2020/10/2553578c-kane.jpg"
  }, 
  {
    name: "Jesse Lingard",
    image: "https://www.thesun.co.uk/wp-content/uploads/2021/03/7f74e3d8-ac79-455e-9d50-b29f2ca1eea2.jpg"
  }, 
  {
    name: "Jamie Vardy",
    image: "https://t1.daumcdn.net/cfile/tistory/99C5CA4A5FF07B412E"
  }
];

// prop (property) 배열의 map 함수를 이용해 String, 이미지 끌고오기 가능함
function App() {
  return (
    <div className="App">
      { playersILike.map(player => <FootballPlayer name={ player.name } picture={ player.image } /> ) }
      </div>
  );
}

export default App;
