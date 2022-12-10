import React from 'react'
import { StyleSheet, View } from 'react-native'
import Destination from './Destination'
import House from './House'
import Path from './Path'

const GameBox = ({ style }: any) => {
    return (
        <View style={style}>
            <House style={[styles.house, styles.redHouse]} />
            <Path style={[styles.path, styles.greenPath]} />
            <House style={[styles.house, styles.greenHouse]} />
            <Path style={[styles.path, styles.redPath]} />
            <Destination style={styles.destination} />
            <Path style={[styles.path, styles.yellowPath]} />
            <House style={[styles.house, styles.blueHouse]} />
            <Path style={[styles.path, styles.bluePath]} />
            <House style={[styles.house, styles.yellowHouse]} />
        </View>
    )
}

export default GameBox

const styles = StyleSheet.create({
    house: {
        borderWidth: 1,
        borderColor: "black",
        width: "40%",
        height: "40%"
    },
    redHouse: {
        backgroundColor: "red"
    },
    greenHouse: {
        backgroundColor: "green"
    },
    blueHouse: {
        backgroundColor: "blue"
    },
    yellowHouse: {
        backgroundColor: "yellow"
    },
    path: {
        borderWidth: 1,
        borderColor: "black"
    },
    redPath: {
        backgroundColor: "red",
        width: "40%",
        height: "20%"
    },
    greenPath: {
        backgroundColor: "green",
        width: "20%",
        height: "40%"
    },
    bluePath: {
        backgroundColor: "blue",
        width: "20%",
        height: "40%"
    },
    yellowPath: {
        backgroundColor: "yellow",
        width: "40%",
        height: "20%"
    },
    destination: {
        borderWidth: 1,
        borderColor: "black",
        width: "20%",
        height: "20%",
        backgroundColor: "purple"
    }
})