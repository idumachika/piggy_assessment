import type {RouteProp} from '@react-navigation/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowRight from '../assets/icons/ArrowRight';
import Heart from '../assets/icons/Heart';
import Minus from '../assets/icons/Minus';
import Plus from '../assets/icons/Plus';
import Star from '../assets/icons/Star';
import Time from '../assets/icons/Time';
import MealType from '../components/MealType';
import {colors, fonts} from '../theme/theme';
import {RootStackParamList} from '../types/NavigatorType';

const MealDetail = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);
  const [activeMealType, setActiveMealType] = useState(9.99);
  const {
    params: {item},
  } = useRoute<RouteProp<RootStackParamList, 'MealDetail'>>();

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowRight />
          </Pressable>

          <Heart />
        </View>

        <View style={styles.main}>
          <Image source={{uri: item?.strMealThumb}} style={styles.image} />
          <View style={styles.mealDetail}>
            <Text style={styles.title}>{item?.strMeal}</Text>
            <Text style={styles.subtitle}>Pizza Italiano</Text>

            <View style={styles.reviewContainer}>
              <View style={styles.review}>
                <Time />
                <Text style={styles.time}>15 min</Text>
              </View>

              <View style={styles.starRating}>
                <Star />
                <Text style={styles.rating}>
                  4.8 <Text style={styles.reviewCount}>(2.2k review)</Text>
                </Text>
              </View>
            </View>
          </View>

          <MealType
            activeMealType={activeMealType}
            setActiveMealType={setActiveMealType}
          />

          <Text style={styles.aboutMeal}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            iusto harum quo. Quia quos veritatis est delectus? Eveniet officia
            ea quisquam explicabo rerum dolor impedit, quos vel repudiandae
            consequatur! Natus.
          </Text>

          <View style={styles.detailFooter}>
            <Text style={styles.total}>
              Total: <Text style={styles.currency}>$</Text>
              {activeMealType}
            </Text>

            {/* counter */}
            <View style={styles.btnContainer}>
              <Pressable style={styles.btn} onPress={decreaseCount}>
                <Minus />
              </Pressable>
              <Text style={styles.amount}>{count}</Text>
              <Pressable style={styles.btn} onPress={increaseCount}>
                <Plus />
              </Pressable>
            </View>
          </View>

          <Pressable style={styles.controlBtn}>
            <Text style={styles.controlBtnText}>Next</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    height: 200,
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 40,
  },
  image: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginTop: -100,
    borderRadius: 220 / 2,
  },
  main: {
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: -30,
  },
  mealDetail: {
    paddingVertical: 20,
  },
  title: {
    paddingTop: 5,
    textAlign: 'center',
    fontFamily: fonts.bold,
    fontSize: 20,
    lineHeight: 18,
    color: colors.secondary,
  },
  subtitle: {
    textAlign: 'center',
    paddingTop: 5,
    fontFamily: fonts.semi,
    color: colors.other,
  },
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontFamily: fonts.semi,
    fontSize: 14,
    lineHeight: 16,
    marginLeft: 2,
    color: colors.secondary,
  },
  rating: {
    fontFamily: fonts.semi,
    fontSize: 12,
    lineHeight: 16,
    color: colors.secondary,
    marginLeft: 6,
  },
  reviewCount: {
    fontFamily: fonts.semi,
    fontSize: 14,
    lineHeight: 16,
    color: colors.other,
  },
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  aboutMeal: {
    marginTop: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: fonts.regular,
    fontSize: 14.5,
    lineHeight: 24,
    color: colors.other,
  },
  detailFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  total: {
    fontFamily: fonts.semi,
    color: colors.secondary,
    fontSize: 18,
    lineHeight: 22,
  },
  currency: {
    color: colors.primary,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c0c0c5',
    padding: 10,
    borderRadius: 6,
  },
  amount: {
    paddingHorizontal: 18,
    fontFamily: fonts.semi,
    fontSize: 16,
    lineHeight: 22,
    color: colors.secondary,
  },
  controlBtn: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 18,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 30,
  },
  controlBtnText: {
    color: colors.neutral,
    fontSize: 17,
    lineHeight: 20,
    fontFamily: fonts.semi,
  },
});
export default MealDetail;
