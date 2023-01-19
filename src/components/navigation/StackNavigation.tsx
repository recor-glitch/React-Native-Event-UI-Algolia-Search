import {
  StyleSheet,
} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../home/Home';

const Stack = createNativeStackNavigator();

const StackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        statusBarHidden: true,
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
