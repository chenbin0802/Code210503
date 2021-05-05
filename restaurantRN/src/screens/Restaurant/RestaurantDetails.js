// React
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

// Selectors
import { restaurantService } from "../../crud/modules/Restaurant/RestaurantService";

// Components
import { View, Text, StyleSheet, Button } from "react-native";

// Navigation
import NavigationService from '../../Navigation'
import Icon from "../../components/Icon";

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
    if(restaurant?.LogoUrl){
      return (
        <Icon style={styles.itemIcon} uri={restaurant.LogoUrl}/>
      )
    }
    return null
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
    const name = `Name:\n  ${restaurant?.Name}`
    const address = `Address:\n  ${restaurant?.Address.FirstLine}, ${restaurant?.Address.City}, ${restaurant?.Address.Postcode}`
    const opening = `Opening:\n  ${restaurant?.OpeningTimeLocal}`
    const deliveryStart = `Delivery Start:\n  ${restaurant?.DeliveryStartTime}`
    const estimatedTime = `Estimated Time:\n  ${restaurant?.DeliveryEtaMinutes.RangeLower} mins - ${restaurant?.DeliveryEtaMinutes.RangeUpper} mins`

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
    if(restaurant?.Deals.length > 0) {
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

RestaurantDetails.propTypes = {
  restaurant: PropTypes.object,
}


const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: restaurantService.selectors.getRestaurantById(ownProps.navigation.getParam('itemId'))(state)
  }
}

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