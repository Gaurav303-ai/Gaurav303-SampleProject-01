import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true}
                pagingEnabled={false}
                showsHorizontalScrollIndicator={false}  >
        <View style={[styles.card, styles.CardsOne]}>
                <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.CardsTwo]}>
                <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.CardsThree]}>
                <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.CardsFour]}>
                <Text>🌍</Text>
        </View>
      
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        textAlign:'center'
    },
    //container:{
        
    //},
    card: {
        width:380,
        height:280,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        elevation:8,
        margin:15,
    },
    CardsOne: {
        backgroundColor:'grey'
    },
    CardsTwo: {
        backgroundColor:'green'
    },
    CardsThree: {
        backgroundColor:'orange'
    },
    CardsFour: {
        backgroundColor:'blue'
    },
})