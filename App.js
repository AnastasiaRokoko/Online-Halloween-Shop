import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, TouchableOpacity} from 'react-native';
import { styles } from './commonStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';
import Onboard_1 from './Onboard-1';
import Onboard_2 from './Onboard-2';

//создание стека навигации
const Stack=createStackNavigator();

//переопределение экрана Apps
const Apps=({navigation})=>{
   //шрифты
   useEffect(()=>{
    Font.loadAsync({
      'Raleway_font':require('./assets/Raleway-Medium.ttf'),
      'Poppins_font':require('./assets/Poppins-Medium.ttf'),
    });
  },[]);
  return (
    <LinearGradient
      colors={['#CC2828', '#150404']}
      style={styles.gradient} // Новый стиль
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={()=>navigation.navigate('Onboard_1')}>
          <Ionicons name='chevron-back-outline' size={24} color='black'/>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>HALLOWEEN</Text>
          <Text style={styles.subtitle}>ME</Text>
        </View>
        
      </View>
    </LinearGradient>
  );
};
//корневая функция App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Apps' component={Apps}/>
        <Stack.Screen name='Onboard_1' component={Onboard_1}/>
        <Stack.Screen name='Onboard_2' component={Onboard_2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
