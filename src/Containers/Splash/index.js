import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { SplashImage } from '../../Assets';

const Splash = () => {
  return (
    <ImageBackground
      source={SplashImage}
      resizeMode={'cover'}
      style={styles.container}>
      <Text style={styles.title}>{'WELCOME TO MONUMENTAL HABITS'}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Klasik-Regular',
    fontSize: 40,
    color: '#573353',
    textAlign: 'center',
    width: 260,
    marginTop: 96,
  },
});

export default Splash;
