import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native"

const Drawer = createDrawerNavigator();

import TelaInicio from "./telas/TelaInicio";
import TelaSobre from "./telas/TelaSobre";
import TelaContato from "./telas/TelaContato";

function App () {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRoutName="Inicio">
        <Drawer.Screen name="Inicio" component={TelaInicio} />
        <Drawer.Screen name="Sobre" component={TelaSobre} />
        <Drawer.Screen name="Contato" component={TelaContato} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;