import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {MealCategories, Meals} from '../types/MealType';

export const mealsApi = createApi({
  reducerPath: 'mealsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
  }),
  endpoints: builder => ({
    getCategories: builder.query<MealCategories, string>({
      query: () => 'categories.php',
    }),
    getCategoryMeals: builder.query<Meals, string>({
      query: category => `filter.php?c=${category}`,
    }),
    getSearchedMeal: builder.query<Meals, string>({
      query: meal => `search.php?s=${meal}`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryMealsQuery,
  useGetSearchedMealQuery,
} = mealsApi;
