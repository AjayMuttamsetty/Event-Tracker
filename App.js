import 'react-native-gesture-handler';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
// import Details from '../screens/Details';
// import Maps from '../screens/Maps';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        {/* <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Maps' component={Maps} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;