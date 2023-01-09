import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import Privacy from './pages/privacy';
import OtpEnter from './pages/otpenter';
import Location from './pages/location';
import PersonalDetails from './pages/personaldetails';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Search from './pages/search';
import FeaturedStore from './pages/featuredstore';
import StoreMenu from './pages/storemenu';
import MyOrders from './pages/myorders';
import Payment from './pages/payments';
import Cart from './pages/cart';
export default function App() {

  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{title:"",headerShown:false}} />
        <Stack.Screen name='Privacy' component={Privacy}/>
        <Stack.Screen name='OtpEnter' component={OtpEnter} options={{title:"",headerShown:false}}/>
        <Stack.Screen name='Location' component={Location} options={{title:"",headerShown:false}}/>
        <Stack.Screen name='PersonalDetails' component={PersonalDetails} options={{title:"Personal Details"}}/>
        <Stack.Screen name='Dashboard' component={Dashboard} options={{title:"",headerShown:false}}/>
        <Stack.Screen name='Profile' component={Profile} options={{title:""}}/>
        <Stack.Screen name='Search' component={Search} options={{title:"",headerShown:false}}/>
        <Stack.Screen name='FeaturedStore' component={FeaturedStore} options={{title:"Featured Stores"}}/>
        <Stack.Screen name='StoreMenu' component={StoreMenu} options={{title:"",headerShown:false}}/>
        <Stack.Screen name='MyOrders' component={MyOrders} options={{title:"My Orders"}}/>
        <Stack.Screen name='Payment' component={Payment} options={{title:"ADDRESSES"}}/>
        <Stack.Screen name='Cart' component={Cart} options={{title:""}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


