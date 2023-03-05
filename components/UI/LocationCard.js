import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {useState, useEffect} from 'react';
import Button from '../UI/Button';
import Geolocation from '@react-native-community/geolocation';
import {getStaticMapImage} from '../../util/location';

const LocationCard = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationStatus, setLocationStatus] = useState('');

  useEffect(() => {
    const requestLocationPermission = () => {
      if (Platform.OS === 'ios') {
     //   getCurrentLocation();
      } else {
        try {
          const granted = PermissionsAndroid.request(
            PermissionsAndroid.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'Location required for displaying the map in the phone',
              buttonPositive: 'Ok',
              buttonNegative: 'Deny',
            },
          );
          if (granted === 'granted') {
          //  getCurrentLocation();
            return true;
          } else {
            return false;
          }
        } catch (e) {}
      }
    };
    requestLocationPermission();
  });

  const getCurrentLocation = () => {};

  const takeLocationHandler = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('position', position);
        setLatitude(JSON.stringify(position.coords.latitude));
        setLongitude(JSON.stringify(position.coords.longitude));
        setLocationStatus('Success');
        console.log('locationStatus', locationStatus);
      },
      error => {
        setLocationStatus('Error');
        console.log('error', error);
        console.log('locationStatus', locationStatus);
      },
    );
  };

  const pickLocationHandler = () => {};

  return (
    <>
      <View style={styles.imageContainer}>
        {
         ( locationStatus !='' && locationStatus!='Error' ) ? (
            <Image style={styles.image} source={{uri: getStaticMapImage(latitude,longitude)}} />
          ) : (
            <View>
              <Text>No Location</Text>
            </View>
          )
          // selectImage ? (<Image style={styles.image} source={{uri:`file://${selectImage}`}}/>) : (<View><Text>No image</Text></View>)
        }
      </View>
      <View style={styles.buttons}>
        <Button onPress={takeLocationHandler}>Locate User</Button>
        <Button onPress={pickLocationHandler}>Pick up on map</Button>
      </View>
    </>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderWidth:2,
    borderColor:'#140077',
    overflow:'hidden'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 8,
  },
});
