import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SeatBox from './SeatBox'

const House = ({style, seatStyle}:any) => {
  return (
    <View style={style}>
      <SeatBox style={styles.seatBox} seatStyle={seatStyle}  />
    </View>
  )
}

export default House

const styles = StyleSheet.create({
    seatBox:{
      width: "60%",
      height: "60%",
      backgroundColor: "white",
      borderColor: "black",
      borderWidth: 1 
    }
})