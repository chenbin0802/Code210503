// React
import React, { Component } from "react";
import PropTypes from 'prop-types';

// Components
import FastImage from 'react-native-fast-image'

class Icon extends Component {

  render () {
    const { style, uri } = this.props
    if(!uri){
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
  url: PropTypes.string,
}

Icon.defaultProps = {
  style: styles.icon
}

const styles = StyleSheet.create({
  icon: {
    width: 80,
    height: 80,
    margin: 10,
  },
})

export default Icon

