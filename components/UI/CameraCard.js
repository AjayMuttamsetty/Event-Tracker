import {useState, useRef, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Button from '../UI/Button';
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/core";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
;
function CameraCard() {

  const [selectImage, setselectImage] = useState('');
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const route = useRoute();
  const pickedImage = route.params?.image;
  console.log('parametrs on camera card',pickedImage);

  useEffect(()=>{
    if(isFocused && pickedImage)
    {
      setselectImage(pickedImage);
    }
  },[navigation,route.params])

  const takeImageHandler = () =>{
    navigation.navigate('CameraScreen');
  }

  const pickImageHandler = async ()=>{
    console.log('Inside pick image handler');
    try{
      const result = await launchImageLibrary();
      console.log('result',result);
      setselectImage(result.assets[0].uri);
      console.log('image uri from pick',result.assets[0].uri);
    }catch(e)
    {
      console.log('errror',e);
    }
  }
  
  return (
    <>
    <View style={styles.imageContainer}>
    {
       selectImage ? (<Image style={styles.image} source={{uri:`${selectImage}`}}/>) : (<View><Text>No image</Text></View>)
     // selectImage ? (<Image style={styles.image} source={{uri:`file://${selectImage}`}}/>) : (<View><Text>No image</Text></View>)
    }
    </View>
    <View style={styles.buttons}>
      <Button onPress={takeImageHandler}>Take Image</Button>
      <Button onPress={pickImageHandler}>Pick Image</Button>
    </View>
    </>
  );
}

export default CameraCard;

const styles = StyleSheet.create({
  image:{
    width:'100%',
    height:'100%'
  },
  imageContainer:{
    width:'100%',
    height:200,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',
    borderWidth:2,
    borderColor:'#140077'
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
    marginVertical:8
  }
});
