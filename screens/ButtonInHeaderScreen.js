import React from 'react';
import {
  Button, StyleSheet, Text, View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const ButtonInHeaderScreen = ({ navigation }) => (
<View style={styles.container}>
    <Text>Wow, there is a button in the header!!</Text>
    <Button title="Go Back" onPress={() => {
      navigation.goBack()
    }} />
  </View>
);

ButtonInHeaderScreen.navigationOptions = {
  headerRight: () => (<Button title="Press me!!" onPress={() => {
    alert('Thank you! :)')
  }} />),
};

export default ButtonInHeaderScreen;