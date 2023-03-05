import {View, Text, StyleSheet, Pressable} from 'react-native';

function Button({onPress, children}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({

  buttonText: {
    textAlign: 'center',
  },
  button: {
    padding: 12,
    margin:4,
    borderWidth: 1,
    borderRadius: 50,
    minWidth:'45%'
  },
  pressed: {
    opacity: 0.50,
  },
});
