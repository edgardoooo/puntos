import _ from 'lodash';
import React, { Component } from 'react';
import { View, FlatList, ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { userGetPromos, userPrimaryFilterUpdate, userSecondaryFilterUpdate } from '../actions';
import UserPromoItem from './UserPromoItem'
import { Card, CardSection } from './common/';
var pri_filter = 'Promos';
var sec_filter = 'All';

class UserPromoList extends Component {
  componentWillMount() {

    this.props.userGetPromos(
      this.props.uid,
      this.props.userPrimaryFilterState.primaryFilterSelected,
      this.props.userSecondaryFilterState.secondaryFilterSelected
    );
  }

  toggleButtonHighlight() {

  }

  filter(sf, pf) {
    console.log("at Filter function")
    console.log("Filtering by " + pf);
    this.props.userGetPromos(this.props.uid, sf, pf);
  }

  renderFilterCarousel() {
    const { filterStyle, filterContainer } = styles;
    const { userPrimaryFilterState, userSecondaryFilterState, pfilter, sfilter } = this.props;
    return (
      <View style={{ flexDirection: 'row', backgroundColor: '#0084b4', borderColor: '#fff', borderTopWidth: 0.5, height: 60, paddingLeft: 5, paddingRight: 5 }}>
        <View style={{ flexDirection: 'row', flex: 3, alignSelf: 'stretch' }}>
          <View style={filterContainer}>
            <View style={filterStyle}>
              <TouchableOpacity onPress={() => {
                //this.props.userPrimaryFilterUpdate({prop:'primaryFilterSelected', value: 'Promos'});
                //this.props.pfilter='Promos';
                console.log("changing pfilter to Promos...");
                pri_filter = 'Promos';
                //console.log("changed pfilter to: " + this.props.userPrimaryFilterState.primaryFilterSelected);
                this.filter(pri_filter, sec_filter);
                }}>
                <Icon name='ios-megaphone' size= {25} color='#0084b4' style={{ alignSelf: 'center' }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={filterContainer}>
            <View style={filterStyle}>
              <TouchableOpacity onPress={() => {
                //this.props.userPrimaryFilterUpdate({prop:'primaryFilterSelected', value: 'Coupons'});
                //this.props.pfilter='Coupons';
                console.log("changing pfilter to Coupons...");
                pri_filter = 'Coupons';
                //console.log("changed pfilter to: " + this.props.userPrimaryFilterState.primaryFilterSelected);
                this.filter(pri_filter, sec_filter);
                }}>
                <Icon name='ios-pricetag' size= {25} color='#0084b4' style={{ alignSelf: 'center' }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 40, width: 0.5, backgroundColor: '#fff', marginRight: 5, alignSelf: 'center'}}></View>
        </View>

        <View style={{ flex: 8 }}>
            <ScrollView horizontal showVerticalScrollIndicator={false} contentContainerstyle={styles.carouselStyle}>
              <View style={filterContainer}>
                <View style={filterStyle}>
                  <TouchableOpacity onPress={() => {
                    //this.props.userSecondaryFilterUpdate({prop:'secondaryFilterSelected', value: 'All'});
                    sec_filter = 'All';
                    this.filter(pri_filter, sec_filter);
                }}>
                    <Icon name='ios-apps' size= {25} color='#0084b4' style={{ alignSelf: 'center' }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={filterContainer}>
                <View style={filterStyle}>
                  <TouchableOpacity onPress={() => {
                    //this.props.userSecondaryFilterUpdate({prop:'secondaryFilterSelected', value: 'Favorites'});
                    sec_filter = 'Favorites';
                    this.filter(pri_filter, sec_filter);
                  }}>
                    <Icon name='md-star' size= {25} color='#0084b4' style={{ alignSelf: 'center' }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={filterContainer}>
                <View style={filterStyle}>
                  <TouchableOpacity onPress={() => {
                    //this.props.userSecondaryFilterUpdate({prop:'secondaryFilterSelected', value: 'Location'});
                    sec_filter = 'Location';
                    this.filter(pri_filter, sec_filter);
                  }}>
                    <Icon name='md-pin' size= {25} color='#0084b4' style={{ alignSelf: 'center' }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={filterContainer}>
                <View style={filterStyle}>
                  <TouchableOpacity onPress={() => {
                    //this.props.userSecondaryFilterUpdate({prop:'secondaryFilterSelected', value: 'Cafe'});
                    sec_filter = 'Cafe';
                    this.filter(pri_filter, sec_filter);
                  }}>
                    <Icon name='md-cafe' size= {25} color='#0084b4' style={{ alignSelf: 'center' }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={filterContainer}>
                <View style={filterStyle}>
                  <TouchableOpacity onPress={() => {
                    //this.props.userSecondaryFilterUpdate({prop:'secondaryFilterSelected', value: 'Bar'});
                    sec_filter = 'Bar';
                    this.filter(pri_filter, sec_filter);
                  }}>
                    <Icon name='md-beer' size= {25} color='#0084b4' style={{ alignSelf: 'center' }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={filterContainer}>
                <View style={filterStyle}>
                  <TouchableOpacity onPress={() => {
                    //this.props.userSecondaryFilterUpdate({prop:'secondaryFilterSelected', value: 'Restaurant'});
                    sec_filter = 'Restaurant';
                    this.filter(pri_filter, sec_filter);
                  }}>
                    <Icon name='md-restaurant' size= {25} color='#0084b4' style={{ alignSelf: 'center' }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={filterContainer}>
                <View style={filterStyle}>
                  <TouchableOpacity onPress={() => { }}>
                    <Icon name='md-desktop' size= {25} color='#0084b4' style={{ alignSelf: 'center' }} />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
        </View>
        </View>
    )
  }

  renderContent() {
    console.log(this.props.promos)
    return (
      <FlatList
        data={this.props.promos}
        renderItem={({item}) => <UserPromoItem item={item} />}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent:'space-around' }}>
        {this.renderFilterCarousel()}
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
      flexDirection: 'row',
      backgroundColor: '#00b0f0',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 30,
  },
  lineSeparatorStyle: {
      backgroundColor: 'white',
      height: 2,
      shadowColor: 'white',
  },
  carouselStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 50,
      backgroundColor: '#00b0f0',
      alignItems: 'center',
      shadowColor: 'white',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative',
  },
  textStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
  },
  filterButtonStyle: {
      height: 40,
      width: 40,
      backgroundColor: 'white',
      borderRadius: 50,
  },
  filterContainer: {
    justifyContent: 'center',
    backgroundColor: '#0084b4',
    flexDirection: 'column',
    flex: 1
  },
  filterStyle: {
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginRight: 5,
    height: 40,
    width: 40
  }
};

const mapStateToProps = state => {
  var { uid, userPrimaryFilterState, userSecondaryFilterState, pfilter, sfilter } = state.userMain;
  console.log(state.userMain)
  const promos = _.map(state.userMain.promos, (val, key) => {
    return {...val, key};
  });
  return { uid, promos, userPrimaryFilterState, userSecondaryFilterState, pfilter, sfilter };
}



export default connect(mapStateToProps, { userGetPromos, userPrimaryFilterUpdate, userSecondaryFilterUpdate })(UserPromoList);
