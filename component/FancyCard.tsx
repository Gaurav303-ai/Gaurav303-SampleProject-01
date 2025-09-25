import { StyleSheet, Text, View ,Image,} from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.Card, styles.cardsElevated]}>
        <Image
        source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
        style={styles.imageCard}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>React Native logo</Text>
          <Text style={styles.cardLabel}>Mobile App Development Tool</Text>
          <Text style={styles.cardDescription}>React Native is an open-source
             framework for building native mobile applications
           using JavaScript and React.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10
    },
    Card: {
        marginHorizontal:15,
        marginBottom:5
    },
    cardsElevated: {
        elevation: 5,
        
    },
    imageCard: {
        height: 300,
        width: '100%',
        borderTopLeftRadius:6,
        borderTopRightRadius:6, // Full width of card
    },
    cardBody:{
      backgroundColor: '#ffffffff',
        borderBottomLeftRadius:6,
        borderBottomRightRadius:6,
    },
    cardTitle:{
      fontSize:24,
      fontWeight:'bold',
      textAlign:'center',
    },
    cardLabel:{
      backgroundColor: '#ffffffff',
      fontSize:19,
      textAlign:'center',
    },
    cardDescription:{
      backgroundColor: '#ffffffff',
      textAlign:'center',
      marginBottom:10,
    }
});
