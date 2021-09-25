import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import { SplashImage } from '../../Assets';
import { colors, fonts } from '../../Utils';

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
    fontFamily: fonts['klasik-regular'],
    fontSize: 40,
    color: colors.sunset,
    textAlign: 'center',
    width: 260,
    marginTop: 96,
  },
});

export default Splash;
