import { useLayoutEffect } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import EventForm from '../components/EventForm';

function Details({navigation,route})
{
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:'Add a new event..'
        })
    },[])

    return(
        <ScrollView style={styles.root}>
            <EventForm />
        </ScrollView>
    )
}

export default Details;

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding: 8,
        marginTop: 8
    }
})