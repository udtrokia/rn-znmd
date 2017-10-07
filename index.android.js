/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation'

import MainScreenNavigator from './src/tabNavigator'
import M_order from './src/mainPages/order'
import Login from './src/signIn/login'
import Register from './src/signIn/register'
import R_map from './src/signIn/map'
import R_location from './src/signIn/location'
import N_face from './src/nopsw/face'
import N_open from './src/nopsw/open'
import ShopBase from './src/shop/base'
import GoOrder from './src/shop/goOrder'
import ChangeOrder from './src/shop/changeOrder'
import Comment from './src/shop/comment'
import Map from './src/map'
import S_detail from './src/shop/base/goods/detail'

const znmd = StackNavigator({
    HomeScreen:{ screen:MainScreenNavigator },
    M_order:{screen:M_order},
    Login:{ screen:Login },
    Register:{ screen:Register },
    R_map :{screen:R_map},
    R_location :{screen:R_location},
    N_face :{screen:N_face},
    N_open :{screen:N_open},
    ShopBase :{screen:ShopBase},
    GoOrder :{screen:GoOrder},
    ChangeOrder :{screen:ChangeOrder},
    Comment:{screen:Comment},
    Map:{screen:Map},
    S_detail:{screen:S_detail}
})



AppRegistry.registerComponent('znmd', () => znmd);
