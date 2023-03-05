import {View, Text, StyleSheet, TextInput} from 'react-native';
import Textinput from './UI/Textinput';
import CameraCard from './UI/CameraCard';
import LocationCard from './UI/LocationCard';


function EventForm()
{

    return(
        <View style={styles.root}>
        <Textinput />
        <CameraCard />
        <LocationCard/>
        </View>
    )
}


export default EventForm;


const styles =  StyleSheet.create({
    root:{
        flex:1,
        padding:8,
        margin:8
    }
})