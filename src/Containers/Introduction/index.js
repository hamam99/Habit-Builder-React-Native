import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  IntroductionSlider1,
  IntroductionSlider2,
  IntroductionSlider3,
} from '../../Assets';
import { Swiper } from '../../Components/Atoms';
import { colors, fonts } from '../../Utils';

const Introduction = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff', paddingBottom: 100 }}>
      <Swiper>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fonts['klasik-regular'],
              fontSize: 32,
              color: colors.eclipse,
            }}>
            {'Welcome To\nMonumental Habits 1'}
          </Text>
          <Image
            style={{ width: 350, height: 487 }}
            source={IntroductionSlider1}
          />
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fonts['manrope-bold'],
              fontSize: 17,
              color: colors.eclipse,
              marginTop: 20,
            }}>
            {'WE CAN HELP YOU TO BE A BETTER\nVERSION OF YOURSELF'}
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fonts['klasik-regular'],
              fontSize: 32,
              color: colors.eclipse,
            }}>
            {'CREATE NEW\nHABIT EASILY'}
          </Text>
          <Image
            style={{ width: 350, height: 487 }}
            source={IntroductionSlider2}
          />
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fonts['manrope-bold'],
              fontSize: 17,
              color: colors.eclipse,
              marginTop: 20,
            }}>
            {'WE CAN HELP YOU TO BE A BETTER\nVERSION OF YOURSELF'}
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fonts['klasik-regular'],
              fontSize: 32,
              color: colors.eclipse,
            }}>
            {'KEEP TRACK OF YOUR PROGRESS'}
          </Text>
          <Image
            style={{ width: 350, height: 487 }}
            source={IntroductionSlider3}
          />
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fonts['manrope-bold'],
              fontSize: 17,
              color: colors.eclipse,
              marginTop: 20,
            }}>
            {'WE CAN HELP YOU TO BE A BETTER\nVERSION OF YOURSELF'}
          </Text>
        </View>
      </Swiper>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 32,
        }}>
        <Text
          style={{
            fontFamily: fonts['manrope-bold'],
            fontSize: 17,
            color: colors.eclipse,
          }}>
          Skip
        </Text>
        <Text
          style={{
            fontFamily: fonts['manrope-bold'],
            fontSize: 17,
            color: colors.eclipse,
          }}>
          Next
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Introduction;
