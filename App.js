import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import { Feather, Entypo } from '@expo/vector-icons';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

// import { Context } from "./src/context/BlogContext";
// import React, { useContext } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  // const { clearMemo } = useContext(Context);
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitle: 'KU Notepad 📝',
            headerStyle: { backgroundColor: '#006664' },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Create')}
                    >
                      <Feather name="plus" size={30} color="white" />
                    </TouchableOpacity>
                  </View>

                  {/* <TouchableOpacity>
                                        <MaterialCommunityIcons name="delete-off" size={30} color="white" />
                                    </TouchableOpacity>      */}
                </>
              ),
            })}
          />
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
                        id: route.params.id,
                      })
                    }
                  >
                    <Entypo name="pencil" size={30} color="white" />
                  </TouchableOpacity>
                </View>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
