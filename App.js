import React, { Component } from 'react';

import {Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MapView, { Polyline, ProviderPropType } from 'react-native-maps';

//import MapView from 'react-native-maps';
//import carImage from './assets/car.png';

const COORDINATES = [
  { latitude: 37.8025259, longitude: -122.4351431 },
  { latitude: 37.7896386, longitude: -122.421646 },
  { latitude: 37.7665248, longitude: -122.4161628 },
  { latitude: 37.7734153, longitude: -122.4577787 },
  { latitude: 37.7948605, longitude: -122.4596065 },
  { latitude: 37.8025259, longitude: -122.4351431 },
];

const COLORS = [
  '#7F0000',
  '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
  '#B24112',
  '#E5845C',
  '#238C23',
  '#7F0000',
];
const latitudeDelta = 0.025
const longitudeDelta = 0.025 

export default class NavigationMap extends Component {
 
  state = {
    region:{
      latitudeDelta,
      longitudeDelta,
      latitude:33.7444613,
      longitude:-118.3870173
    }
  }

  onChangeValue = region =>{
    this.setState({
      region
    })
  }

  
  render() {
    return (
      <View style={{flex:1}}>
        <MapView

          style={{flex:1}}
          minZoomLevel={15}
          onRegionChangeComplete={this.onChangeValue}
          initialRegion={this.state.region}
        />

        <View style={{top:'50%',left:'50%',marginLeft:-24,marginTop:-48,position:'absolute'}}>
          <Image style = {{height:20,width:20}} source={require('./assets/car.png')} />
        </View>
        
       
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
  },
  buttonContainerUpDown: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainerLeftRight: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(100,100,100,0.2)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 50,
    width: 50,
  },
  up: {
    alignSelf: 'flex-start',
  },
  down: {
    alignSelf: 'flex-end',
  },
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
});