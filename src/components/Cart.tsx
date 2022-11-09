import * as React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {removeFromCart} from '../features/cartSlice';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {colors, fonts} from '../theme/theme';
import type {MealType} from '../types/MealType';

const Cart = () => {
  const cartItems = useAppSelector(state => state.carts.cartItem);
  const dispatch = useAppDispatch();

  // if (cartItems.length === 2) return;

  const renderItem = ({item, index}: {item: MealType; index: number}) => {
    return (
      <Pressable
        onPress={() => dispatch(removeFromCart(item.idMeal))}
        style={[
          styles.imageContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            marginRight: index === cartItems.length - 1 ? 0 : 6,
            marginTop: 5,
          },
        ]}
        key={item.idMeal}>
        <Image
          source={{
            uri: item.strMealThumb,
          }}
          style={styles.image}
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.cartContainer}>
      <View style={styles.cartTextContainer}>
        <Text style={styles.headingOne}>Cart</Text>
        <Text style={styles.headingTwo}>
          {cartItems?.length > 0
            ? `${cartItems?.length} items`
            : 'No item in cart'}
        </Text>
      </View>

      <View style={styles.mealsInCart}>
        <FlatList
          keyExtractor={item => item.idMeal}
          data={cartItems}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: colors.primary,
    borderRadius: 20,
    position: 'absolute',
    width: '100%',
    bottom: 12,
    right: 0,
    height: 100,
    overflow: 'scroll',
  },
  cartTextContainer: {
    marginRight: 30,
  },
  mealsInCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    width: '75%',
  },
  imageContainer: {
    width: 40,
    height: 40,
    backgroundColor: colors.neutral,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  headingOne: {
    fontFamily: fonts.bold,
    fontSize: 20,
    lineHeight: 26,
    color: colors.neutral,
  },
  headingTwo: {
    fontFamily: fonts.regular,
    color: colors.neutral,
  },
});
export default Cart;
