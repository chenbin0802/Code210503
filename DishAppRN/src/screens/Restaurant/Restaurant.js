// React redux
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

// Selectors
import { restaurantService } from "crud/modules/Restaurant/RestaurantService";

// Components
import { View, Text, StyleSheet, TextInput, FlatList, Button, ActivityIndicator, Alert, Pressable } from "react-native";
import Icon from "components/Icon";

// Navigation
import NavigationService from 'Navigation'

/**
 * Restaurant main UI
 */
class Restaurant extends Component {
  constructor (props) {
    super(props)
    this.searchText = ''
    this.state = {
      message : '',
      isLoading: false,
    }
  }

  static getDerivedStateFromProps (props, prevState) {
    if( prevState.isLoading != props.restaurantdata?.isLoading){
      const isLoading = props.restaurantdata?.isLoading
      const message = !isLoading && props.restaurantdata?.Restaurants?.length > 0 ? '' : 'No results found'
      return {
        isLoading,
        message,
      }
    }

    return null
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSearch()}
        {this.renderList()}
      </View>
    )
  }

  renderEmptyItem = () => {
    const { message } = this.state
    return (<View style={styles.emptyItem}>
    <Text>{message}</Text>
  </View>)
  }

  renderItem = ({ item }) => {
    const cuisines = item.CuisineTypes.reduce((accumulator, currentValue, index) => `${accumulator} ${index!=0 ?'|':''} ${currentValue.Name}`,'Cuisines:\n')
    const openStatus = item.IsOpenNow ? 'Open Now': 'Closed'
    const rating = `Count:${item.NumberOfRatings}   Average:${item.RatingAverage}   StarRating:${item.RatingStars}`
    return (
      <Pressable onPress={()=>this.onItemPress(item.Id)}>
        <View style={styles.itemContainer}>
          <Icon style={styles.itemIcon} uri={item.LogoUrl}/>
          <View style={styles.itemInfo}>
            <Text>{item.Name}</Text>
            <Text>{rating}</Text>
            <Text>{cuisines}</Text>
            <Text>{openStatus}</Text>
          </View>
        </View>
      </Pressable>
    )
  }

  renderList() {
    const { isLoading } = this.state
    const { restaurantdata } = this.props
    if(isLoading){
      return <ActivityIndicator />
    }
    return <FlatList
      data={restaurantdata?.Restaurants}
      renderItem={this.renderItem}
      ListEmptyComponent={this.renderEmptyItem()}
      keyExtractor={(item) => `${item.Id}-${item.Name}`}
      />;
  }

  renderSearch() {
    return <TextInput
      style={styles.input}
      onChangeText={text => this.onChangeText(text)}
      maxLength={20}
      placeholder={"Please enter Postal Code"}
      onSubmitEditing={this.onSubmit}
      returnKeyType={'search'}
    />
  }

  onItemPress = (itemId) => {
    NavigationService.navigate('RestaurantDetails', { itemId: itemId });
  }

  onSubmit = () => {
    const trimedText = this.searchText.trim()
    if(trimedText.length > 0){
      this.props.searchByPostalCode(trimedText)
    }else{
      Alert.alert("Please Enter Postal Code");
    }
  }

  onChangeText = (value) => {
    this.searchText = value
  }
}

Restaurant.propTypes = {
  restaurantdata: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    restaurantdata: restaurantService.selectors.getRestaurants(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchByPostalCode: data => {
      dispatch(restaurantService.actions.fetchRestaurants(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurant);


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  emptyItem : {
    flex: 1,
    alignItems:'center',
  },
  itemContainer: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    flex: 1,
    flexDirection: 'row',
  },
  itemIcon: {
    width: 80,
    height: 80,
    margin: 10,
  },
  itemInfo: {
    flex: 1,
    margin:5,
  }
});
