import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, TouchableOpacity,Image} from 'react-native';
import { styles } from './commonStyles';
import * as Font from 'expo-font';
import { useEffect } from 'react';

//переопределение экрана Onboard
const Onboard_2=({navigation})=>{
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
                    source={require("./assets/другой паучок_2 1.png")}
                    style={styles.image8}
                    />
                <Image 
                    source={require("./assets/тень.png")}
                    style={styles.image9}
                    />
                
                 
                </View>   
                <Text style={styles.welcomeText2}>Начнем{'\n'}Путешествие</Text>
                <Text style={styles.welcomeText3}>Умная, великолепная и стильная{'\n'}
                    коллекция Изучите сейчас
                </Text>
               
                <Image 
                    source={require("./assets/слайдер2.png")}
                    style={styles.image5}
                    />
                <Image 
                    source={require("./assets/украшение4.png")}
                    style={styles.image6}
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

export default Onboard_2;