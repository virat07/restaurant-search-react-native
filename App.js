import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Business Search' }} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} options={{ title: 'Business Search' }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}