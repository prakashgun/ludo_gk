import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cell from './Cell'

const Path = ({ style, panelStyle }: any) => {
  return (
    <View style={style}>
      <View style={[panelStyle, styles.firstPanel]}>
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
      </View>

      <View style={[panelStyle, styles.secondPanel]}>
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
      </View>

      <View style={[panelStyle, styles.thirdPanel]}>
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
        <Cell style={styles.cell} />
      </View>
    </View>
  )
}

export default Path

const styles = StyleSheet.create({

  firstPanel: {
    borderColor: "black",
    borderWidth: 1
  },
  secondPanel: {

  },
  thirdPanel: {

  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white"
  }
})