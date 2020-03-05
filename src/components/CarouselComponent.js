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
        
      },
      {
        round: "2",
        
      },
      {
        round: "3",
        
      },
      {
        round: "4",
        
      },
      {
        round: "5",
        
      },
      {
        round: "6",
        
      },
      {
        round: "7",
        
      },
      {
        round: "8",
        
      }
    ];

    this.state = {
    };
  };


  _renderItem = ({item, index}) => {
      return (
          <Round style={{alignItems:'center', backgroundColor:'red'}}/>
      );
  }

  render () {
      return (
          <Carousel
          contentContainerCustomStyle={{alignItems:'center'}}
            ref={(c) => { this._carousel = c; }}
            data={this.DATA}
            renderItem={this._renderItem}
            sliderWidth={590}
            itemWidth={320}
            layout={'tinder'} 
          />
      );
  }
}
