import {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraScreen = ({navigation}) => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    const verifyPermissions = async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus();
      // 'authorized' | 'not-determined' | 'denied' | 'restricted'
      if (cameraPermission === 'authorized') {
        setShowCamera(true);
        return true;
      } else if (cameraPermission === 'denied') {
        Alert.alert(
          'Permissions Denied',
          'Your permissions were denied, please go to settings for permission',
          [
            {
              text: 'Open Settings',
              onPress: async () => {
                await Linking.openSettings();
              },
            },
            {
              text: 'Cancel',
              onPress: () => {
                return false;
              },
              style: 'cancel',
            },
          ],
        );
      } else if (cameraPermission === 'not-determined') {
        const newCameraPermission = await Camera.requestCameraPermission();
        if (newCameraPermission === 'authorized') {
          setShowCamera(true);
          return true;
        } else if (newCameraPermission === 'denied') {
          Alert.alert(
            'Permissions Denied',
            'Your permissions were denied, please go to settings for permission',
            [
              {
                text: 'Open Settings',
                onPress: async () => {
                  await Linking.openSettings();
                },
              },
              {
                text: 'Cancel',
                onPress: () => {
                  return false;
                },
                style: 'cancel',
              },
            ],
          );
        }
      }
    };
    verifyPermissions();
  }, [navigation]);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
      console.log(photo.path);
    }
  };

  const savePhoto = () =>{
    navigation.navigate({
      name:'Details',
      params: {image:imageSource}
    })
  }

  return (
    <View style={styles.root}>
      {showCamera ? (
        <>
          <Camera
            device={device}
            photo={true}
            style={StyleSheet.absoluteFill}
            enableZoomGesture={true}
            isActive={showCamera}
            ref={camera}
          />
          <View style={styles.captureButton}>
            <TouchableOpacity
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: 'grey',
                borderColor:'white',
                borderWidth:2
              }}
              onPress={capturePhoto}></TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          {imageSource != '' ? (
            <Image
              style={styles.image}
              source={{
                uri: `file://'${imageSource}`,
              }}
            />
          ) : null}
          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#77c3ec',
                }}
                onPress={() => setShowCamera(true)}>
                <Text style={{color: '#77c3ec', fontWeight: '500'}}>
                  Retake
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#77c3ec',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                onPress={() => savePhoto()}>
                <Text style={{color: 'white', fontWeight: '500'}}>
                  Use Photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  captureButton:{
    position:'absolute',
    bottom:0,
    padding:40,
    alignSelf:'center'
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
