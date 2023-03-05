import {useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Icon from '../components/UI/Icon';
import EventCount from '../components/UI/EventCount';

function Home({navigation,route}) {


  const [selectedImage, setSelectedImage] = useState();

  const addPlace = () => {
    console.log('Inside app place');
    navigation.navigate('Details');
  };


  function openCamera()
  {
    navigation.navigate('CameraScreen');
  }

  useLayoutEffect(() => {
    console.log('Inside use effecg');
    navigation.setOptions({
      title: 'Home',
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
    margin: 8
   // backgroundColor:'white'
  },
  topContainer: {
    flex: 1,
  },

  bottomContainer: {
    flex: 4,
   // backgroundColor: 'green',
  },
});
