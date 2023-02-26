import {View, Text, Pressable, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

function Icon({ onPress, icon, size, color}){
    return(
        <Pressable  onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Ionicon name={icon} size={size} color={color} />
            </View>
        </Pressable>
    )
}

export default Icon;


const styles =  StyleSheet.create({
    pressed:{
        opacity:0.75
    },
    buttonContainer:{
        padding:8
    }
})

