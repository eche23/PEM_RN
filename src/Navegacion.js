// especifica los navegadores a usar en la aplicación. En esta aplicación
// se van a usar los tres: stack, tab y drawer. 
// Inicialmente, solo está stack

import { 
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

// especificar todas vistas de la aplicación 
// StackNavigator
import VistaLogin from './vistas/VistaLogin'
import VistaRegistro from './vistas/VistaRegistro'
import VistaLista from './vistas/VistaLista'

// se define el StackNavigator
const Stack_Login = createStackNavigator ( 
    {
        Login: {
            screen: VistaLogin,
        },
        Registro: {
            screen: VistaRegistro,
        },
        Lista: {
            screen: VistaLista,
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none' // elimina la barra de estados
    }
)

const Contenedor = createAppContainer(Stack_Login);

export default Contenedor;



