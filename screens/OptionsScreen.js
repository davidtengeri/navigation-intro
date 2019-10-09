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

const OptionsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button title="Go Back" onPress={() => {
      navigation.goBack()
    }} />

    <Button title="Screen with parameter" onPress={() => {
      navigation.navigate('Parameters', {
        name: 'Jane',
        address: {
          city: 'Szeged'
        }
      })
    }} />

    <Button title="Custom header" onPress={() => {
      navigation.navigate('CustomHeader');
    }} />
    <Button title="Button in the header" onPress={() => {
      navigation.navigate('ButtonInHeader');
    }} />
    <Button title="Tabs" onPress={() => {
      navigation.navigate('Tab');
    }} />
    <Button title="Drawer" onPress={() => {
      navigation.navigate('Drawer');
    }} />
  </View>
);

export default OptionsScreen;
