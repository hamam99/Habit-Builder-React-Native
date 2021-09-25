import React from 'react';
import Swiper from 'react-native-swiper';

const RNSwiper = props => {
  return <Swiper showsButtons={true}>{props.children}</Swiper>;
};

export default RNSwiper;
