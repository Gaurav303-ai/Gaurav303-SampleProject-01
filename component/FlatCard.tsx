import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
         <View style={[styles.card, styles.cardFour]}>
            <Text>black</Text>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight: 'bold',
        textAlign:'center'
    },
    container:{
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
        width:100,
        height:100,
        textAlign:'center',
        borderRadius: 4 
    },
    cardOne: {
        backgroundColor: 'red'
    }, 
    cardTwo: {
        backgroundColor: 'green'
    },
    cardThree: {
        backgroundColor: 'blue'
    },
    cardFour: {
        backgroundColor: 'pink'
    } 


})