import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, ScrollView } from 'react-native';
import Header from './Header';
import React from 'react';

export default function Matches({ route }) {

  let dt = route.params.curDate;
  let arr_dates = [];
  for (let i = -7; i <= 7; i++) {
    let d2 = new Date();

    arr_dates.push(new Date(d2.setDate(dt.getDate() - i)));
  }
  console.log(arr_dates);
  return (
    
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView style={styles.main}><Text style={styles.dt}>{route.params.curDate.toLocaleString()}</Text></ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dt:{
    color: 'white',
    fontSize: 30
  },
    container:{
        backgroundColor: '#0B0B44',
        minHeight: '100%'
    },
    main:{
        backgroundColor: '#131627',
        minHeight: '100%'
    }
});
