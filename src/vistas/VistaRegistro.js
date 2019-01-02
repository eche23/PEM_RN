import React, { Component } from 'react';
import { 
    Text, 
    View, 
    StyleSheet 
} from 'react-native';

export default class VistaRegistro extends Component {

    // Propiedades del componente:
    // username: username del usuario
    // password: password del usuario 
    constructor(props){
        super(props)
        // a partir de este punto se puede usar las propiedades del complemento
    }
    
    render() {
        
        const{navigation} = this.props;
        username = navigation.getParam('username', '')
        password = navigation.getParam('password', '')

        return (
            <View style={styles.container}>
                <Text style={styles.texto}>
                
                    Estas son las propiedades personalizadas (props):
                </Text>
                <Text style={styles.texto}>
                    username:{username}
                </Text>
                <Text style={styles.texto}>
                    password: {password}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    texto: {
        marginTop: 5, 
        fontSize: 18
    }
});
