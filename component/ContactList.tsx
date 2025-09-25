import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Demo 1',
            startus: 'Working Time',
            imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
            uid: 2,
            name: 'Demo 2',
            startus: 'Holigay Time',
            imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
        },
        {
            uid: 3,
            name: 'Demo 3',
            status: 'Marketing Team',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1674500780050-dd938a43771c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },

    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}>
            {contacts.map(({uid, name, status, imageUrl})=>(
                <View key={uid} style={styles.userCard}>
                    <Image 
                    source={{
                        uri: imageUrl
                    }}
                    style={styles.userImage}
                    />
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            ))}
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    container:{},
    userCard:{},
    userImage: {
        width:60,
        height:60,
        borderRadius:30
    },
    userName:{},
    userStatus:{}

})