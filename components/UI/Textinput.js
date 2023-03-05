import {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

function Textinput() {
  const [inputText, setInputText] = useState('');

  const InputHandler = userinput => {
    setInputText(userinput);
  };

  return (
    <View>
      <Text style={styles.titleStyle}>Title</Text>
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        value={inputText}
        onChangeText={InputHandler}
        placeholder="Enter Event Title"
      />
    </View>
  );
}

export default Textinput;

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight:'bold',
    fontSize:20,
    color:'#000648'
  },
  inputStyle: {
    padding: 13,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 8,
    backgroundColor:'#a6d2f7'
  },
});
