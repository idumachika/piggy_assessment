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
import {useGetCategoriesQuery} from '../features/mealsApi';
import {colors, fonts} from '../theme/theme';
import type {MealCategoriesType} from '../types/MealType';

interface CategoriesProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Categories = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  const {data} = useGetCategoriesQuery('');

  const renderItem = ({
    item,
    index,
  }: {
    item: MealCategoriesType;
    index: number;
  }) => {
    return (
      <Pressable
        onPress={() => setSelectedCategory(item.strCategory)}
        style={[
          styles.category,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            marginRight:
              index === data!.categories.slice(0, 6).length - 1 ? 0 : 12,
            backgroundColor:
              item.strCategory === selectedCategory
                ? colors.primary
                : 'transparent',
            borderColor:
              item.strCategory === selectedCategory ? 'none' : '#ddd',
            borderWidth: item.strCategory === selectedCategory ? 0 : 1,
          },
        ]}>
        <Image
          source={{
            uri: item?.strCategoryThumb,
          }}
          style={styles.categoryImg}
        />
        <Text
          style={[
            styles.categoryName,
            {
              color:
                item.strCategory === selectedCategory
                  ? colors.neutral
                  : colors.secondary,
            },
          ]}>
          {item.strCategory}
        </Text>
      </Pressable>
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={item => item.idCategory}
        data={data?.categories.slice(0, 6)}
        contentContainerStyle={styles.categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        ListEmptyComponent={() => <ActivityIndicator color={colors.primary} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    alignItems: 'flex-start',
    marginTop: 30,
  },
  category: {
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: 85,
    height: 105,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryName: {
    fontFamily: fonts.semi,
    color: colors.secondary,
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  categoryImg: {
    width: 40,
    height: 40,
  },
});
export default Categories;
