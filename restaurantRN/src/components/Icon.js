// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import FastImage from 'react-native-fast-image'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50
  }
})

class Icon extends Component {
  render () {
    const { style, uri } = this.props
    if (!uri) {
      return null
    }

    return (
      <FastImage
        style={style}
        source={{
          uri: uri,
          cache: FastImage.cacheControl.web
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    )
  }
}

Icon.propTypes = {
  style: PropTypes.object,
  uri: PropTypes.string
}

Icon.defaultProps = {
  style: styles.icon
}

export default Icon
