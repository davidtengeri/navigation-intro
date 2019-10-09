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

const DrawerScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>{navigation.getParam('content', 'No content')}</Text>
    <Button title="Open" onPress={() => {
      navigation.openDrawer();
    }} />
    <Button title="Go Home" onPress={() => {
      navigation.navigate('Home');
    }} />
  </View>
);

export default DrawerScreen;