import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screens/Home';
import Intro from '../screens/Intro';
import Detail from '../screens/MealDetail';
import {RootStackParamList} from '../types/NavigatorType';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Intro">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MealDetail" component={Detail} />
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
