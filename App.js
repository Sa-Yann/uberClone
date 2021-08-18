import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
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
            {/* always give a behavior and style  KeyboardAvoidingView for it to fucntion */}
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"} 
              style={{ flex: 1}}
              // keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            >
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
            </KeyboardAvoidingView>
          </SafeAreaProvider> 
        </NavigationContainer> 
    </Provider>
  );
}


