import React from 'react'
import { StyleSheet, View } from 'react-native'
import Destination from './Destination'
import House from './House'
import Path from './Path'

const GameBox = ({ style }: any) => {
    return (
        <View style={style}>
            <View style={styles.firstRow}>
                <House style={[styles.house, styles.redHouse]} seatStyle={[styles.seat, styles.redSeat]} />
                <Path style={[styles.path, styles.greenPath]} />
                <House style={[styles.house, styles.greenHouse]} seatStyle={[styles.seat, styles.greenSeat]} />
            </View>
            <View style={styles.secondRow}>
                <Path style={[styles.path, styles.redPath]} />
                <Destination style={styles.destination} />
                <Path style={[styles.path, styles.yellowPath]} />
            </View>
            <View style={styles.thirdRow}>
                <House style={[styles.house, styles.blueHouse]} seatStyle={[styles.seat, styles.blueSeat]} />
                <Path style={[styles.path, styles.bluePath]} />
                <House style={[styles.house, styles.yellowHouse]} seatStyle={[styles.seat, styles.yellowHouse]} />
            </View>
        </View>
    )
}

export default GameBox

const styles = StyleSheet.create({
    firstRow: {
        flex: 2,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "black"
    },
    secondRow: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "black"
    },
    thirdRow: {
        flex: 2,
        flexDirection: "row"
    },
    house: {
        borderColor: "black",
        flex:2,
        justifyContent: "center",
        alignItems: "center"
    },
    redHouse: {
        backgroundColor: "#EE1B26",
        borderRightWidth:1
    },
    greenHouse: {
        backgroundColor: "#00A04A"
    },
    blueHouse: {
        backgroundColor: "#24AEFE",
        borderRightWidth:1
    },
    yellowHouse: {
        backgroundColor: "#FFDE17",
    },
    path: {
        borderColor: "black"
    },
    redPath: {
        backgroundColor: "#EE1B26",
        flex: 2,
        borderRightWidth:1
    },
    greenPath: {
        backgroundColor: "#00A04A",
        flex: 1,
        borderRightWidth:1
    },
    bluePath: {
        backgroundColor: "#24AEFE",
        flex: 1,
        borderRightWidth:1
    },
    yellowPath: {
        backgroundColor: "#FFDE17",
        flex: 2,
        borderLeftWidth: 1
    },
    destination: {
        backgroundColor: "purple",
        flex: 1
    },
    seat:{
        height: 20,
        width: 20,
        borderRadius:13,
        margin: 9
    },
    redSeat: {
        backgroundColor: "#EE1B26"
    },
    greenSeat: {
        backgroundColor: "#00A04A"
    },
    blueSeat: {
        backgroundColor: "#24AEFE"
    },
    yellowSeat: {
        backgroundColor: "#FFDE17"
    }
})