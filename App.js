import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//this must be capital letter for what 
//is exported by default and small letters 
//without '.js' for the file name
import Nav from './src/nav/nav';
import Generate from './src/generator/generate';

class App extends React.Component {

  state = {
    nameOfApp: "Awesomer"
  }

  onAddRandom = () => {
    alert('add')
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav nameOfApp={this.state.nameOfApp}/>
        <Generate add={this.onAddRandom}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9f9',
    alignItems: 'center',
  },
});

export default App;