import React from 'react'
import { StyleSheet, View } from 'react-native'
import Cell from './Cell'

const GreenPath = ({ style }: any) => {
    return (
        <View style={style}>
            <View style={styles.panel}>
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={styles.cell} />
                <Cell style={[styles.cell, styles.whiteCell]} />
            </View>

            <View style={styles.panel}>
                <Cell style={styles.cell} />
                <Cell style={styles.cell} />
                <Cell style={styles.cell} />
                <Cell style={styles.cell} />
                <Cell style={styles.cell} />
                <Cell style={[styles.cell, styles.whiteCell]} />
            </View>

            <View style={styles.panel}>
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={[styles.cell, styles.whiteCell]} />
            </View>
        </View>
    )
}

export default GreenPath

const styles = StyleSheet.create({
    panel: {
        flex: 1
    },
    cell: {
        flex: 1,
        borderWidth: 1,
        borderColor: "black"
    },
    whiteCell: {
        backgroundColor: "white"
    }
})