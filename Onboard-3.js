import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, TouchableOpacity,Image} from 'react-native';
import { styles } from './commonStyles';
import * as Font from 'expo-font';
import { useEffect } from 'react';

//переопределение экрана Onboard
const Onboard_3=({navigation})=>{
    //шрифты
       useEffect(()=>{
        Font.loadAsync({
          'Raleway_font':require('./assets/Raleway-Medium.ttf'),
        });
      },[]);
    return(
        <LinearGradient
            colors={['#CC2828', '#150404']}
            style={styles.gradient} // Новый стиль
            >
            <View style={styles.container}>
           
                <View style={styles.header2}>
                
                <Image 
                    source={require("./assets/другой паучок_3 1.png")}
                    style={styles.image_spider2}
                    />
                <Image 
                    source={require("./assets/тень.png")}
                    style={styles.shadow2}
                    />
                
                 
                </View>   
                <Text style={styles.welcomeText2}>У Вас Есть Сила,{'\n'}Чтобы</Text>
                <Text style={styles.welcomeText3}>Быть незабываемым, как редкий яркий{'\n'}
                    цветок
                </Text>
               
                <Image 
                    source={require("./assets/слайдер3.png")}
                    style={styles.slider}
                    />
                <Image 
                    source={require("./assets/украшение3.png")}
                    style={styles.design7}
                    />
               
                
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Далее</Text>
                </TouchableOpacity>
            </View>
            
            </View>
        </LinearGradient>
        
    );
};

export default Onboard_3;