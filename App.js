import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen'; 
import { store } from './store';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function App() {
  
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
        {/* <HomeScreen/>  */}
        <NavigationContainer> 
          <SafeAreaProvider > 
            <Stack.Navigator>
              <Stack.Screen 
                name="Home Screen" 
                component={HomeScreen}
                options={{
                  headerShown: false
                }}
                  />
              <Stack.Screen 
                name="Map Screen" 
                component={MapScreen}
                options={{
                  headerShown: false
                }}
                  />
              <Stack.Screen 
                name="Eats Screen" 
                component={MapScreen}
                options={{
                  headerShown: false
                }}
                  />
            </Stack.Navigator>
          </SafeAreaProvider> 
        </NavigationContainer> 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
