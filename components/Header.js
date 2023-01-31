import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react';



export default function Header() {
  var [ isPress, setIsPress ] = React.useState(false);
  var touchProps = {
    activeOpacity: 0.7,                            // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.login_button_click : styles.login_button, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
  };
  
  return (

    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
          <TouchableHighlight {...touchProps}>
              <Text style={styles.login_text}>Login</Text>
          </TouchableHighlight>
      </View>
      <ScrollView style={styles.dates} horizontal={true} contentContainerStyle={{ flexGrow: 1,justifyContent: 'center' }}>
          <View style={styles.dateItem}>
            <Text style={styles.day}>Thursday</Text>
            <Text style={styles.date}>26.01</Text>
          </View>
          <View style={styles.dateItem}>
            <Text style={styles.day}>Friday</Text>
            <Text style={styles.date}>27.01</Text>
          </View>
          <View style={styles.dateItem}>
            <Text style={styles.day}>Saturday</Text>
            <Text style={styles.date}>28.01</Text>
          </View>
          <View style={styles.dateItemActive}>
            <Text style={styles.dayActive}>Sunday</Text>
            <Text style={styles.dateActive}>29.01</Text>
          </View>
          <View style={styles.dateItem}>
            <Text style={styles.day}>Monday</Text>
            <Text style={styles.date}>30.01</Text>
          </View>
          <View style={styles.dateItem}>
            <Text style={styles.day}>Tuesday</Text>
            <Text style={styles.date}>31.01</Text>
          </View>
          <View style={styles.dateItem}>
            <Text style={styles.day}>Wednesday</Text>
            <Text style={styles.date}>01.02</Text>
          </View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  dates:{
    backgroundColor: '#080832'
  },
  tmp:{
    color: 'white',
    fontSize: 25,
    margin: 5
  },
  dateItem:{
    paddingHorizontal:5,
    paddingVertical: 10,
    width: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateItemActive:{
    paddingHorizontal:5,
    paddingVertical: 10,
    width: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: "#FF16FF",
  },
  dayActive:{
    color: '#FF16FF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  dateActive:{
    color: '#FF16FF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  day:{
    color: '#EDEDED',
    fontWeight: 'bold',
    fontSize: 12,
  },
  date:{
    color: '#EDEDED',
    fontWeight: 'bold',
    fontSize: 12,
  },
  container: {
    backgroundColor: '#0B0B44',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: "#174DE4",
  },
  topHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },
  logo: {
    height: 30,
    width: 120,
    resizeMode: 'stretch'
  },
  login_text: {
    color: '#174DE4',
    fontSize: 18,
  },
  login_button: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#174DE4',
  },
  login_button_click: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#174DE4',
  },
});
