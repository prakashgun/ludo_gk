import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Destination = ({style}:any) => {
  return (
    <View style={style}>
      <View style={styles.destination} />
    </View>
  )
}

export default Destination

const styles = StyleSheet.create({
  // Pacman style modified from https://www.codedaily.io/tutorials/The-Shapes-of-React-Native
  destination: {
    width: 0,
    height: 0,
    borderTopWidth: 45,
    borderTopColor: "#00A04A",
    borderLeftColor: "#EE1B26",
    borderLeftWidth: 40,
    borderRightColor: "#FFDE17",
    borderRightWidth: 40,
    borderBottomColor: "#24AEFE",
    borderBottomWidth: 48
  }
})