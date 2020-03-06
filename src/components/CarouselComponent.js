import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Round from '../components/Round'

import {connect} from 'react-redux'
class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };


  _renderItem = ({item, index}) => {
      return (
          <Round style={{alignItems:'center'}} roundNumber={item.roundNumber}/>
      );
  }

  render () {
      return (
          <Carousel
          contentContainerCustomStyle={{alignItems:'center'}}
            ref={(c) => { this._carousel = c; }}
            data={this.props.teamA}
            renderItem={this._renderItem}
            sliderWidth={590}
            itemWidth={320}
            layout={'tinder'} 
          />
      );
  }
}


const mapStateToProps = state => ({
  teamA: state.teamAReducer.teamAList
});

const mapDispatchToProps = dispatch => {
  return {
    add: ( round) => dispatch(addPassword( round)),
    addGuess: ( round) => dispatch(addGuessAnswer( round))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselComponent)