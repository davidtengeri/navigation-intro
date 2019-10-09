import React from 'react';
import {
  Button, StyleSheet, Text, TextInput, View,
} from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }
})

class ParameterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  render() {
    const { navigation } = this.props;
    const { name } = this.state;

    return (
      <View style={styles.container}>
        <Text>Parameter Screen</Text>
        <Text>
          Name: {navigation.getParam('name', 'Unknown')}
        </Text>
        <Text>
          Address:
          {JSON.stringify(navigation.getParam('address', {}))}
        </Text>
        <TextInput
          value={name}
          placeholder="Name"
          onChangeText={(value) => this.setState({name: value})}
        />
        <Button
          title="Change name"
          onPress={() => {
            navigation.setParams({ name });
            this.setState({ name: '' });
          }}
        />
      </View>
    );
  }
}

export default ParameterScreen;