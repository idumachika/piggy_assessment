import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {colors, fonts} from '../theme/theme';
import {AppNavigationProps} from '../types/NavigatorType';

const Intro = () => {
  const navigation = useNavigation<AppNavigationProps>();
  const [autoplayState, setAutoplayState] = useState(true);
  const slides = [
    {
      id: 1,
      image: require('../assets/images/image-one.png'),
      text: 'Build your savings with ease & discipline',
    },
    {
      id: 2,
      image: require('../assets/images/image-two.png'),
      text: 'Invest with ease in verified business',
    },
    {
      id: 3,
      image: require('../assets/images/image-three.png'),
      text: "Lock funds you dont't to be tempted to touch",
    },
    {
      id: 4,
      image: require('../assets/images/image-four.png'),
      text: "Lock funds you dont't to be tempted to touch",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>PiggyVest</Text>
        <Swiper
          autoplay={autoplayState}
          onTouchStart={() => setAutoplayState(false)}
          onTouchEnd={() => setAutoplayState(true)}
          paginationStyle={styles.paginationStyle}
          dot={<View style={styles.sliderDot} />}
          activeDot={<View style={styles.activeDot} />}>
          {slides?.map(({image, text, id}) => (
            <View style={styles.slideContainer} key={id}>
              <Image source={image} style={styles.slideImage} />

              <Text style={styles.slideText}>{text}</Text>
            </View>
          ))}
        </Swiper>

        <View style={styles.btnContainer}>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnText}>Login</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.registerBtn]}>
            <Text style={styles.btnText}>Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#111111',
    paddingTop: 30,
    paddingBottom: 20,
  },
  wrapper: {
    justifyContent: 'space-between',
    flex: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 'auto',
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#0b60d5',
    width: '48%',
    borderBottomEndRadius: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  btnText: {
    fontFamily: fonts.semi,
    color: colors.neutral,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 18,
  },
  registerBtn: {
    borderWidth: 2,
    borderColor: colors.neutral,
    backgroundColor: 'transparent',
    paddingVertical: 13,
  },
  title: {
    fontFamily: fonts.bold,
    color: '#0b60d5',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    textTransform: 'lowercase',
  },
  slideContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  slideImage: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  slideText: {
    fontFamily: fonts.semi,
    fontSize: 22,
    lineHeight: 30,
    color: colors.neutral,
    paddingTop: 40,
    textAlign: 'center',
  },
  sliderDot: {
    width: 15,
    height: 3,
    backgroundColor: '#272727',
    borderRadius: 10,
    marginLeft: 6,
    marginRight: 6,
  },
  activeDot: {
    width: 15,
    height: 3,
    backgroundColor: colors.neutral,
    borderRadius: 10,
    marginLeft: 6,
    marginRight: 6,
  },
  paginationStyle: {
    marginBottom: 85,
  },
});
export default Intro;
