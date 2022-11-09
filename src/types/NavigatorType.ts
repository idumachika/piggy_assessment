import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {MealType} from './MealType';

export type RootStackParamList = {
  Home: undefined;
  MealDetail: {
    item: MealType;
  };
  Intro: undefined;
};

export type AppNavigationProps = NativeStackNavigationProp<RootStackParamList>;
