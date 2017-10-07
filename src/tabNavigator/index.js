
import {Dimensions} from 'react-native'
import { TabNavigator } from 'react-navigation'

import Home from '../mainPages/home'
import Order from '../mainPages/order'
import Mine from '../mainPages/mine'

import {hradio,wradio} from '../radio'


const MainScreenNavigator = TabNavigator({
    Home:{ screen: Home},
    Order:{ screen: Order},
    Mine: { screen: Mine},
},{
    tabBarPosition:'bottom',
    animationEnabled:false,
    tabBarOptions:{
	showIcon:true,
	indicatorStyle:{height:0},
	tabStyle:{height:97*hradio},
	style:{
	    backgroundColor:'#fbfbfb'
	}
    }
})


export {MainScreenNavigator as default}
