import React from 'react';
import PropTypes from "prop-types"
import { waitForDomChange } from '@testing-library/dom';

// 부모 컴포넌트 -> 자식 컴포넌트로 데이터를 보내는 것이 가능하다.
// 예시) 외부 API로부터 받아온 playersILike Array를 하위 컴포넌트 props로 받아
//       App 컴포넌트로 데이터 전달해주기
function FootballPlayer({ name, picture, rating }){
  return( 
    <div>
      <h2>Name: {name}</h2>
      <h4>⭐ {rating} / 5.0 </h4>
      <img src= { picture } style={ {weight: '640px', height: '640px'} }/>
    </div>

    )
}

// prop-types: 부모 컴포넌트로 부터 prop들을 잘 받았는지 코딩할때 validation 해줌
// npm -i prop-types

FootballPlayer.propTypes = {
name: PropTypes.string.isRequired,
picture: PropTypes.string.isRequired,
rating: PropTypes.number.isRequired

}

const playersILike = [
  {
    id:1,
    name: "Heung-min Son",
    image: "https://img.olympicchannel.com/images/image/private/t_16-9_1920/primary/c9esw7mzofm5paatdci5",
    rating: 5.0
  },
  {
    id:2,
    name: "Gareth Bale",
    image: "https://staticg.sportskeeda.com/editor/2020/10/2a48a-16040719703426-800.jpg",
    rating: 4.5
  }, 
  {
    id:3,
    name: "Harry Kane",
    image: "https://cdn-wp.thesportsrush.com/2020/10/2553578c-kane.jpg",
    rating: 4.9
  
  }, 
  {
    id:4,
    name: "Jesse Lingard",
    image: "https://www.thesun.co.uk/wp-content/uploads/2021/03/7f74e3d8-ac79-455e-9d50-b29f2ca1eea2.jpg",
    rating: 4.3
  }, 
  {
    id:5,
    name: "Jamie Vardy",
    image: "https://t1.daumcdn.net/cfile/tistory/99C5CA4A5FF07B412E",
    rating: 4.7
  }
];

// prop (property) 배열의 map 함수를 이용해 String, 이미지 끌고오기 가능함
function App() {
  return (
    <div className="App">
      { playersILike.map(player => <FootballPlayer key = {player.id} name={ player.name } picture={ player.image } rating={ player.rating } /> ) }
      </div>
  );
}

export default App;
