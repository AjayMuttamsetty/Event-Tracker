import {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from '../components/UI/Icon';
import EventCount from '../components/UI/EventCount';

function Home({navigation}) {
  const addPlace = () => {
    console.log('Inside app place');
    navigation.navigate('Details');
  };

  useLayoutEffect(() => {
    console.log('Inside use effecg');
    navigation.setOptions({
      title: 'Home',
      headerTintColor: 'white',
      headerTitleAlign: 'center',
      headerRight: () => (
        <Icon onPress={addPlace} icon="add" size={20} color="white" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <EventCount />
      </View>
      <View style={styles.bottomContainer}>
        <Text>Home page</Text>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 8,
    margin: 8,
  },
  topContainer: {
    flex: 1,
  },

  bottomContainer: {
    flex: 4,
    backgroundColor: 'green',
  },
});
