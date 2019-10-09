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

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Welcome on the Home screen</Text>
    <Button title="Enter to start" onPress={() => {
      navigation.navigate('Options');
    }} />
  </View>
);

export default HomeScreen;
