import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home/home';
import About from './pages/home/about';
import Contact from './pages/home/contact';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Userdashboard from './pages/dashboard/user/dashboard';
import Admindashboard from './pages/dashboard/admin/dashboard';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
                <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="UserDashboard" component={Userdashboard} options={{ headerShown: false }} />
                {/*<Stack.Screen name="AdminDashboard" component={Admindashboard} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
