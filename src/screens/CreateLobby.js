import React from "react";
import { Text, View, Linking } from "react-native";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome , MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import {connect} from 'react-redux'
import Header from '../components/Header'
class CreateLobby extends React.Component {
  static navigationOptions = {
    title: 'Chat',
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: 'green' },
  }

  constructor() {
    super();
    this.state = {
      room: "",
    };
    
  }

  shareToWhatsApp = (text) => {
    Linking.openURL(`whatsapp://send?text=${text}`);
   }
   
   shareToEmail = (text) => {
     Linking.openURL(`mailto:?subject=Código da Sala Decifre&body=${text}`);
    }
  render() {
    console.log(this.props.navigation.actions.goBack)
    return (
      <LinearGradient
      colors={[ "#458299","#23414D"]}
      start={[0, 0]}
      end={[0, 0.8]}
        style={{ flex: 1}}
      > 
        <Header goBack={this.props.navigation.actions.goBack}/>
        <View style={styles.container}>
          <View style={styles.roomBox}>
          <Text style={styles.h2}> CÓDIGO DA SALA </Text>
          <Text style={styles.h1} selectable={true}> XC452782 </Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}  onPress={()=>this.shareToWhatsApp("XCh12ji1234")}>
            <FontAwesome style={styles.iconUser} name="whatsapp" size={32} color='#aaa' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={()=>this.shareToEmail('CreateTeams')}>
            <MaterialCommunityIcons style={styles.iconUser} name="email-outline" size={32} color='#aaa' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={()=>this.props.navigation.navigate('CreateTeams')}>
            <Feather style={styles.iconUser} name="copy" size={32} color='#aaa' />
            </TouchableOpacity>

          </View>
          </View>

        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  roomBox: {
    backgroundColor:"#2b4e57",
    borderWidth:1.5,
    borderColor:'#436383',
    height:152,
    width: 248,
    padding:10,
    borderRadius:15,
    alignContent: "center",
    alignItems: "center",
    elevation:7,
    justifyContent: "space-around",
  },
  buttons:{
  flexDirection:"row",
  },
  button: {
    marginHorizontal: 15,
    justifyContent: "center",

  },
  h1: {
    fontFamily:'orbitron-regular',
    color:'#638393',
    marginVertical:8,    
    fontSize: 25,
    textAlign: "center",
  },
  h2: {
    fontFamily:'orbitron-regular',
    color:'#638393',
    fontSize: 18,
    textAlign: "center"
  },
  
});

const mapStateToProps = state =>{
  return{
    players:state.playerReducer.playersList  
  }
}

export default connect(mapStateToProps)(CreateLobby);
