import React from 'react'// learn how to active dark mode or light mode and aboutflex box style sheet , and            
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from 'react-native'

function appPro(): React.JSX.Element {
const isDarkMode = useColorScheme()==='dark'    
    return(
   <View style={styles.container}>
    <Text style={isDarkMode ? styles.whiteText : styles.darkText}>hello world </Text>
   </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    whiteText: {
        color:' #FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})
export default appPro