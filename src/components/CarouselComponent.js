import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Round from '../components/Round'

export class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);

    this.DATA = [
      {
        round: "1",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "2",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "3",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "4",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "5",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "6",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "7",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "8",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      }
    ];

    this.state = {
    };
  };


  _renderItem = ({item, index}) => {
      return (
          <Round/>
      );
  }

  render () {
      return (
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.DATA}
            renderItem={this._renderItem}
            sliderWidth={590}
            itemWidth={320}
            layout={'default'} 
          />
      );
  }
}
