import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
} from 'react-native';
  
export default class VistaLista extends Component {
    constructor(props) {
      super(props)
    }

    render () {
      return (
        <View style={styles.container} >
          <Text style={styles.cabecera}>
              Lista de items
          </Text>
        </View>
      )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10
  },
  cabecera: {
    fontSize: 22,
    marginLeft: 10,
    marginBottom: 8,
    color: 'blue'
  },
  toolbar: {
    height: 56,
    backgroundColor: '#b4c7e7',
  },
});

