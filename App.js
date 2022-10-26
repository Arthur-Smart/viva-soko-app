import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import ProductInfor from './screens/ProductInfor';
import LatelyAdded from './components/LatelyAdded';
import AddItem from './screens/AddItem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar
        backgroundColor="#61dafb"/>
         <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{headerShown:false}}
      >
         <Stack.Screen name="Register" component={Register}/>
         <Stack.Screen name="Login" component={Login}/>
         <Stack.Screen name="Home" component={Home}/>
         <Stack.Screen name="ProductInfo" component={ProductInfor}/>
         <Stack.Screen name="LatelyAdded" component={LatelyAdded}/>
         <Stack.Screen name="AddItem" component={AddItem}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


