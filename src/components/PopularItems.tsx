import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Delete from '../assets/icons/Delete';
import ShoppingBag from '../assets/icons/ShoppingBag';
import Time from '../assets/icons/Time';
import {addToCart, removeFromCart} from '../features/cartSlice';
import {useGetCategoryMealsQuery} from '../features/mealsApi';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {colors, fonts} from '../theme/theme';
import type {MealType} from '../types/MealType';
import {AppNavigationProps} from '../types/NavigatorType';

interface PopularItemsProps {
  selectedCategory: string;
}

const PopularItems = ({selectedCategory}: PopularItemsProps) => {
  const navigation = useNavigation<AppNavigationProps>();
  const {data} = useGetCategoryMealsQuery(selectedCategory);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.carts.cartItem);

  const renderItem = ({item, index}: {item: MealType; index: number}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('MealDetail', {
            item: item,
          })
        }
        style={[
          styles.meal,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            marginRight: index === data!.meals.length - 1 ? 0 : 20,
          },
        ]}>
        <Text style={styles.mealName}>{item.strMeal.slice(0, 30)}</Text>
        <Text style={styles.amount}>
          <Text style={styles.currency}>$</Text>9.99
        </Text>

        <View style={styles.mealImageContainer}>
          <Image
            source={{
              uri: item.strMealThumb,
            }}
            style={styles.mealImage}
          />
        </View>

        <View style={styles.mealFooter}>
          <View>
            <Text style={styles.caloryAmount}>🔥 44 Calories</Text>
            <View style={styles.timeToCook}>
              <Time />
              <Text style={styles.timeToCookText}>20 min</Text>
            </View>
          </View>

          {!cartItems.includes(item) ? (
            <Pressable
              style={styles.addToCartBtn}
              onPress={() => dispatch(addToCart(item))}>
              <ShoppingBag />
            </Pressable>
          ) : (
            <Pressable
              style={styles.addToCartBtn}
              onPress={() => dispatch(removeFromCart(item.idMeal))}>
              <Delete />
            </Pressable>
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Items</Text>
        <Pressable>
          <Text style={styles.btnText}>See All</Text>
        </Pressable>
      </View>

      <View>
        {data?.meals ? (
          <FlatList
            keyExtractor={item => item.idMeal}
            data={data?.meals?.slice(0, 5)}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={styles.meals}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (
              <ActivityIndicator color={colors.primary} />
            )}
          />
        ) : (
          <Text style={styles.info}>Please select a category</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.semi,
    color: colors.secondary,
  },
  btnText: {
    fontFamily: fonts.regular,
    fontSize: 14,
  },
  meals: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  meal: {
    backgroundColor: '#eee',
    borderRadius: 25,
    padding: 20,
    width: 250,
    height: 320,
    justifyContent: 'center',
  },
  mealName: {
    textAlign: 'center',
    fontFamily: fonts.semi,
    color: colors.secondary,
    fontSize: 16,
    // lineHeight: 18,
  },
  mealImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  mealImage: {
    aspectRatio: 1,
    width: 150,
    borderRadius: 150 / 2,
  },
  amount: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 18,
    fontFamily: fonts.semi,
    color: colors.secondary,
  },
  currency: {
    color: colors.primary,
  },
  mealFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  caloryAmount: {
    fontFamily: fonts.semi,
    fontSize: 14,
    lineHeight: 18,
    color: colors.secondary,
  },
  timeToCook: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeToCookText: {
    marginLeft: 5,
    fontFamily: fonts.regular,
    fontSize: 12.5,
    lineHeight: 15,
  },
  addToCartBtn: {
    backgroundColor: '#fafafa',
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    fontFamily: fonts.regular,
    marginTop: 20,
    color: colors.other,
  },
});

export default PopularItems;
