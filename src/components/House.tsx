import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SeatBox from './SeatBox'

const House = ({style}:any) => {
  return (
    <View style={style}>
      {/* <SeatBox style={styles.seatBox} /> */}
      <Text>House</Text>
    </View>
  )
}

export default House

const styles = StyleSheet.create({
    seatBox:{
    }
})