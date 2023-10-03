import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import { Entypo, AntDesign } from '@expo/vector-icons';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import dayjs from 'dayjs';
import AboutUsScreen from './src/screens/AboutUsScreen';

var buddhistEra = require('dayjs/plugin/buddhistEra');
dayjs.extend(buddhistEra);
dayjs().format('BBBB BB');
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerTitle: 'KU Exam schedule',
            headerStyle: { backgroundColor: '#006664' },
            headerTintColor: '#fff',
            headerRight: () => (
              <View style={{ alignItems: 'flex-end'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AboutUs')}
                >
                  <AntDesign name="infocirlceo" size={24} color="white" />
                </TouchableOpacity>
              </View>
            ),
          })}
        >
          <Stack.Screen name="Index" component={IndexScreen} />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{ headerBackTitleVisible: false }}
          />
          <Stack.Screen name="Edit" component={EditScreen} />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Edit', {
                        key: route.params.key,
                      })
                    }
                  >
                    <Entypo name="pencil" size={30} color="white" />
                  </TouchableOpacity>
                </View>
              ),
              headerBackTitleVisible: false,
            })}
          />
          <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
