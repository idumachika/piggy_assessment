export type MealCategoriesType = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
};

export type MealCategories = {
  categories: MealCategoriesType[];
};

export type MealType = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type Meals = {
  meals: MealType[];
};
