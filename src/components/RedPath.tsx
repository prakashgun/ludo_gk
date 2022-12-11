import React from 'react'
import { StyleSheet, View } from 'react-native'
import Cell from './Cell'

const RedPath = ({ style }: any) => {
    return (
        <View style={style}>
            <View style={styles.panel}>
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={styles.cell} />
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={[styles.cell, styles.whiteCell]} />
            </View>

            <View style={styles.panel}>
                <Cell style={[styles.cell, styles.whiteCell]} />
                <Cell style={styles.cell} />
                <Cell style={styles.cell} />
                <Cell style={styles.cell} />
                <Cell style={styles.cell} />
                <Cell style={styles.cell} />

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

export default RedPath

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: "row"
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