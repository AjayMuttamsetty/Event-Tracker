import {View, Text, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-paper';
const EventCount = () => {
  return (
    <View>
      <Card style={styles.message}>
        <Card.Content>
          <View style={styles.container}>
            <View style={styles.welcome}>
              <Text style={styles.title}>Hello</Text>
              <Text style={styles.description}>
                Welcome Ajay Muttamsetty Muttamsetty !!!
              </Text>
            </View>
            <View style={styles.count}>
              <Text>1000</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default EventCount;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginVertical: 4,
    fontSize: 20,
  },
  description: {
    paddingHorizontal: 8,
    fontSize: 14,
  },
  welcome: {
    width: '70%',
    // paddingHorizontal:8,
    // justifyContent:'center'
  },
  message: {
    border: 2,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 5},
  },
  count: {
    padding: 25,
    border: 2,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 50,
  },
});
