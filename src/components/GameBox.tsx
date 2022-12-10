import React from 'react'
import { StyleSheet, View } from 'react-native'
import Destination from './Destination'
import House from './House'
import Path from './Path'

const GameBox = ({ style }: any) => {
    return (
        <View style={style}>
            <View style={styles.firstRow}>
                <House style={[styles.house, styles.redHouse]} />
                <Path style={[styles.path, styles.greenPath]} />
                <House style={[styles.house, styles.greenHouse]} />
            </View>
            <View style={styles.secondRow}>
                <Path style={[styles.path, styles.redPath]} />
                <Destination style={styles.destination} />
                <Path style={[styles.path, styles.yellowPath]} />
            </View>
            <View style={styles.thirdRow}>
                <House style={[styles.house, styles.blueHouse]} />
                <Path style={[styles.path, styles.bluePath]} />
                <House style={[styles.house, styles.yellowHouse]} />
            </View>
        </View>
    )
}

export default GameBox

const styles = StyleSheet.create({
    firstRow: {
        flex: 2,
        flexDirection: "row"
    },
    secondRow: {
        flex: 1,
        flexDirection: "row"
    },
    thirdRow: {
        flex: 2,
        flexDirection: "row"
    },
    house: {
        borderWidth: 1,
        borderColor: "black",
        flex:2
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
        flex: 2
    },
    greenPath: {
        backgroundColor: "green",
        flex: 1
    },
    bluePath: {
        backgroundColor: "blue",
        flex: 1
    },
    yellowPath: {
        backgroundColor: "yellow",
        flex: 2
    },
    destination: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        flex: 1
    }
})