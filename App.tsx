import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import FlatCard from './component/FlatCard'
import ElevatedCard from './component/ElevatedCard'
import FancyCard from './component/FancyCard'
import ActionCard from './component/ActionCard'
import ContactList from './component/ContactList'

const App = () => {
  return (
    <View>
    <SafeAreaView>
      <ScrollView>
      <FlatCard />
      <ElevatedCard />
      <FancyCard/>
      <FancyCard/>
      <ActionCard/>
      <ContactList/>
    <View>
    </View>
    </ScrollView>
    </SafeAreaView>
    </View>
  )
}

export default App