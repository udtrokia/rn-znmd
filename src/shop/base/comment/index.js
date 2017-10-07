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

export default class Comment extends Component{
    render(){
	return(
		<View
	    style={{flex:1}}
		>
		<Image
	    source={require('./static/title.png')}
	    style={{marginTop:hradio*20,height:hradio*200,width:wradio*687,alignSelf:'center'}}
		/>
		<ScrollView
	    style={{flex:1}}
		>
		<TouchableWithoutFeedback>
		<Image
	    source={require('./static/comment1.png')}
	    style={{marginTop:hradio*20,height:hradio*290,width:wradio*678,alignSelf:'center'}}
		/>
		</TouchableWithoutFeedback>
		<TouchableWithoutFeedback>		
		<Image
	    source={require('./static/comment2.png')}
	    style={{marginTop:hradio*20,marginBottom:hradio*30,height:hradio*290,
		    width:wradio*678,alignSelf:'center'}}
		/>
		</TouchableWithoutFeedback>		
		</ScrollView>		
		</View>
	)
    }
}
