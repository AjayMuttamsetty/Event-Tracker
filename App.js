import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';
import Maps from './screens/Maps';
import CameraScreen from './screens/CameraScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: 'red'},
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
