/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../theme/theme';

interface MealTypeProps {
  activeMealType: number;
  setActiveMealType: React.Dispatch<React.SetStateAction<number>>;
}

const MealType = ({activeMealType, setActiveMealType}: MealTypeProps) => {
  const mealTypes = [
    {
      id: 1,
      type: 'Small 8"',
      price: 9.99,
    },
    {
      id: 2,
      type: 'Medium 12"',
      price: 12.99,
    },
    {
      id: 3,
      type: 'Large 18"',
      price: 16.99,
    },
  ];

  return (
    <View style={styles.selectMealContainer}>
      {mealTypes?.map((meal, index) => (
        <Pressable
          onPress={() => setActiveMealType(meal.price)}
          key={meal.id}
          style={[
            styles.selectMeal,
            {
              marginRight: index === mealTypes.length - 1 ? 0 : 15,
              borderColor:
                activeMealType === meal.price ? colors.primary : '#ddd',
              borderWidth: activeMealType === meal.price ? 2 : 1.5,
            },
          ]}>
          <View
            style={[
              styles.checkbox,
              {
                borderWidth: activeMealType === meal.price ? 6 : 2,
                borderColor:
                  activeMealType === meal.price ? colors.primary : '#ddd',
              },
            ]}
          />
          <Text style={styles.mealType}>{meal.type}</Text>
          <Text style={styles.mealAmount}>${meal.price}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  selectMealContainer: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  selectMeal: {
    borderRadius: 17,
    borderColor: '#ddd',
    paddingVertical: 20,
    // paddingHorizontal: 22,
    width: '30%',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
  },
  mealType: {
    marginTop: 20,
    color: '#898989',
    fontFamily: fonts.regular,
    fontSize: 13,
    lineHeight: 14,
  },
  mealAmount: {
    fontFamily: fonts.semi,
    fontSize: 14,
    lineHeight: 18,
    color: colors.secondary,
    marginTop: 2,
  },
});
export default MealType;
