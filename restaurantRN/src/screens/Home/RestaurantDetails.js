// React
import React, { Component } from "react";
import { connect } from "react-redux";

// Selectors
import { createStructuredSelector } from "reselect";
import { getRestaurants, getRestaurantById } from "./selectors";

// Components
import { View, Text, StyleSheet, TextInput, FlatList, Button, ActivityIndicator, Alert, Modal } from "react-native";
import FastImage from 'react-native-fast-image'

// Navigation
import NavigationService from '../../navigation'

class RestaurantDetails extends Component {

  render(){
    return (
      <View style={styles.container}>
              {this.renderIcon()}
              {this.renderInfo()}
              {this.renderDeals()}
              {this.renderButton()}
      </View>
    )
  }

  renderIcon = () => {
    const { restaurant } = this.props
    return (
      <FastImage
      style={styles.itemIcon}
      source={{
          uri: restaurant.LogoUrl,
          cache: FastImage.cacheControl.web
      }}
      resizeMode={FastImage.resizeMode.contain}
      />
    )
  }

  renderButton = () => {
    return (
      <Button
      title="Close"
      onPress={this.onButtonClicked}
      />
    )
  }

  renderInfo = () => {
    const { restaurant } = this.props
    const name = `Name:\n  ${restaurant.Name}`
    const address = `Address:\n  ${restaurant.Address.FirstLine}, ${restaurant.Address.City}, ${restaurant.Address.Postcode}`
    const opening = `Opening:\n  ${restaurant.OpeningTimeLocal}`
    const deliveryStart = `Delivery Start:\n  ${restaurant.DeliveryStartTime}`
    const estimatedTime = `Estimated Time:\n  ${restaurant.DeliveryEtaMinutes.RangeLower} mins - ${restaurant.DeliveryEtaMinutes.RangeUpper} mins`

    return (<View>
                    <Text>{name}</Text>
              <Text>{address}</Text>
              <Text>{opening}</Text>
              <Text>{deliveryStart}</Text>
              <Text>{estimatedTime}</Text>
    </View>
      
    )

  }

  renderDeals = () => {
    const { restaurant } = this.props
    if(restaurant.Deals.length > 0) {
      return (
        <View>
          <Text>Deals:</Text>
          {restaurant.Deals.map(deal=> {
          return (
            <View key={deal.OfferId}>
              <Text>{deal.Description}</Text>
            </View>
          )
          })}
        </View>
      )
    }

    return <View>
      <Text> No Deals </Text>
    </View>


  }

  onButtonClicked = () => {
    NavigationService.goBack()
  }
}

const mapStateToProps = (state, ownProps) => createStructuredSelector({
  restaurant: getRestaurantById(ownProps.navigation.getParam('itemId'))
});

export default connect(
  mapStateToProps,
)(RestaurantDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 10,
  },
  itemIcon: {
    width: 80,
    height: 80,
    margin: 10,
  },
})