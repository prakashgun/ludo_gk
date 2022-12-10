import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import FooterPanel from './src/components/FooterPanel'
import GameBox from './src/components/GameBox'
import HeaderPanel from './src/components/HeaderPanel'

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/background.jpg')}
        style={styles.backgroundImage} resizeMode="cover">
        <HeaderPanel style={styles.headerPanel} />
        <GameBox style={styles.gameBox} />
        <FooterPanel style={styles.footerPanel} />
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  },
  gameBox: {
    flex: 5
  },
  headerPanel: {
    flex: 2
  },
  footerPanel: {
    flex: 2
  }
})