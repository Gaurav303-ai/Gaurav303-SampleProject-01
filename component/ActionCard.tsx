import { StyleSheet, Text, View, Linking ,Image,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import ElevatedCard from './ElevatedCard'

const { width } = Dimensions.get('window');
export default function ActionCard() {
    function openWebsite( websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.ElevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                    What's new in Javascript 21-ES12
            </Text>
        </View>
        <Image
              source={{
                uri: 'https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg'
              }}
              style={styles.CardImage}
              />
              <View style={styles.bodyContainer}>
                <Text numberOfLines={3}>
                    ECMAScript 2021 (ES12) introduced several new features and enhancements to JavaScript. The key additions include:
                    String.prototype.replaceAll(): This method allows replacing all occurrences of a substring within a string, eliminating 
                    the need for regular expressions with the global flag (/g) for this common task.ECMAScript 2021 (ES12) introduced several
                     new features and enhancements to JavaScript. The key additions include:
                    String.prototype.replaceAll(): This method allows replacing all occurrences of a substring within a string, eliminating 
                    the need for regular expressions with the global flag (/g) for this common task.
                </Text>
              </View>
              <View style={styles.footerContainer}>
                <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev/docs/linking#sendintent-android')}>
                  <Text style={styles.textsty}>Read More</Text>
                </TouchableOpacity>
              </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      fontSize: 24,
        fontWeight: 'bold',
        margin: 10
    },
    card:{},
    ElevatedCard:{},
    headingContainer:{},
    headerText: {},
    CardImage:{
      height:300,
      width:width,
      margin:20
    },
    bodyContainer:{},
    footerContainer:{},
    textsty:{
      fontSize: 24,
        fontWeight: 'bold',
        margin: 5,
    }
})
 