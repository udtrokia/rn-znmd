import React, {Component} from 'react'
import {
    View,
    Image,
    TextInput,
    Keyboard,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native'

import {hradio,wradio} from '../../../radio'

export default class Shop extends Component{
    constructor(props){
        super(props)
    }
    render(){
	return(
		<View>
		<Image
	    source={require('./static/contact.png')}
	    style={{height:hradio*241,width:wradio*720}}
		/>
		<Image
	    source={require('./static/time.png')}
	    style={{height:hradio*97,width:wradio*720,marginTop:hradio*20}}
		/>
		<Image
	    source={require('./static/explain.png')}
	    style={{height:hradio*193,width:wradio*720,marginTop:hradio*20}}
		/>		
		</View>
	)
    }
}
