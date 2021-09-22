import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { SplashImage } from '../../Assets';

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={SplashImage}
        resizeMode={'cover'}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Splash;
