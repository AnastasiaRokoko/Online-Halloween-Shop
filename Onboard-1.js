import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, TouchableOpacity,Image} from 'react-native';
import { styles } from './commonStyles';
import * as Font from 'expo-font';
import { useEffect } from 'react';

//переопределение экрана Onboard
const Onboard_1=({navigation})=>{
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
                <View style={styles.header}>
                    
                <Text style={styles.welcomeText}>Добро{'\n'}пожаловать</Text>
                <Image 
                    source={require("./assets/украшение1.png")}
                    style={styles.image1}
                    />
                <Image 
                    source={require("./assets/украшение2.png")}
                    style={styles.image2}
                    />
                    
                </View>
                <Image 
                    source={require("./assets/картинка паучок.png")}
                    style={styles.image3}
                    />
                <Image 
                    source={require("./assets/тень.png")}
                    style={styles.image4}
                    />
                <Image 
                    source={require("./assets/слайдер.png")}
                    style={styles.image5}
                    />
                <Image 
                    source={require("./assets/украшение4.png")}
                    style={styles.image6}
                    />
                <Image 
                    source={require("./assets/украшение3.png")}
                    style={styles.image7}
                    />
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Onboard_2')}>
                    <Text style={styles.buttonText}>Начать</Text>
                </TouchableOpacity>
            </View>
                
                
            
            </View>
        </LinearGradient>
        
    );
};

export default Onboard_1;