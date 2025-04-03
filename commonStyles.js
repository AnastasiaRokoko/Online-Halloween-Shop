import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    flex: 1, 
  },
  backButton: {
    position: "absolute",
    top: height * 0.1,
    left: width * 0.05,
    alignItems: "center",
    borderRadius: 40,
    width: 24,
    height: 24,
    backgroundColor: "#FFFFFF",
  },

  titleContainer: {
    flexDirection: "row", // Делаем заголовок + "ME" в одной строке
    alignItems: "flex-start", // Выравниваем по верхней линии
  },

  title: {
    fontFamily: "Raleway_font",
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#FFFFFF",
    fontSize: width * 0.1, // Делаем адаптивным
    lineHeight: width * 0.11, // Устанавливаем высоту строки
  },

  subtitle: {
    fontFamily: "Raleway_font",
    fontSize: width * 0.06,
    textTransform: "uppercase",
    fontWeight: "400",
    color: "#FFFFFF",
    marginTop: -height * 0.011, // Поднимаем "ME"
    marginLeft: width * 0.01, // Добавляем небольшой отступ
  },

  header:{
    top:-height*0.35,
    alignItems:'center',
  },
  welcomeText:{
    fontFamily: "Raleway_font",
    fontWeight: '900',
    color: "#FFFFFF",
    fontSize: width * 0.08, // Делаем адаптивным
    textAlign:'center',
    textTransform: "uppercase",
  },

  image1:{ 
    position: "absolute", 
    top: height * 0.02, 
    right: width * 0.60,
  },

  image2:{ 
    position: "absolute", 
    top: height * 0.12, 
    right: width * 0.1,
  },

  image3:{ 
      width: width * 0.8,
      height: width * 0.8,
      position: "absolute",
      top: height * 0.18,
  },

  image4:{ 
    position: "absolute",
    top: height * 0.61, // Чуть ниже паука
  },

  image5:{ 
    position: "absolute",
    top: height * 0.71,
  },

  image6:{ 
    position: "absolute", 
    top: height * 0.4, 
    right: width * 0.06,
  },

  image7:{ 
    position: "absolute", 
    top: height * 0.75, 
    left: width * 0.1,
  },

  image8:{
      width: width * 0.8,
      height: width * 0.8,
      position: "absolute",
      top: height * 0.025,
  },

  footer:{
    top:height*0.39,
    alignItems:'center',
  },

  button:{
    height:height*0.06,
    width:width*0.9,
    borderRadius:13,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
  },

  buttonText:{
    color:'#2B2B2B',
    textAlign:'center',
    fontWeight:600,
    fontFamily:'Raleway_font',
    fontSize: width * 0.03,

  },
  header2:{
    top:-height*0.35,
    alignItems:'center',
  },

  welcomeText2:{
    fontFamily: "Raleway_font",
    fontWeight: '700',
    lineHeight:44.2,
    color: "#FFFFFF",
    fontSize: width * 0.09, // Делаем адаптивным
    textAlign:'center',
    marginBottom:15,
    marginTop:height*0.1,
  },

  welcomeText3:{
    fontFamily: "Poppins_font",
    fontWeight: '400',
    lineHeight:28.2,
    color: "#D8D8D8",
    fontSize: width * 0.05, // Делаем адаптивным
    textAlign:'center',
  },

  image9:{
    position: "absolute",
    top: height * 0.42, // Чуть ниже паука
  }
});
