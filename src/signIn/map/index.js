
import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar,
    TextInput,
    Alert,
    Image,
    View,
    ScrollView
} from 'react-native'

import {hradio,wradio} from '../../radio'

export default class Register extends Component{

    static navigationOptions={
        header:null,
    }
    render(){
	const {navigate} = this.props.navigation		
	return(
		<View
	    style={{flex:1}}
		>
		<StatusBar
	    animated={true}
	    translucent={false}
	    backgroundColor='#54aefc'/>
		<Image
	    source={require('./static/map.png')}
	    style={{height:hradio*480,width:720*wradio,resizeMode:'stretch'}}	    
		/>
		<Image
	    source={require('./static/nearby.png')}
	    style={{marginTop:hradio*5,height:hradio*97,borderBottomWidth:1,borderColor:'#000000',width:720*wradio}}
		/>
		<ScrollView
	    style={{height:hradio*1280,flex:1}}	    
		>
		<Image
	    source={require('./static/location_detail.png')}
	    style={{width:wradio*720,height:hradio*632}}
		/>
		</ScrollView>
		<TouchableOpacity
	    style={{
		width:wradio*282,
		height:hradio*102,
		marginTop:hradio*970,
		alignSelf:'center',
		position:'absolute'
	    }}
	    onPress={()=>{navigate('HomeScreen')}}
		>
		<Image
	    source={require('./static/btn.png')}
	    style={{width:wradio*282,height:hradio*102}}
		/>
		</TouchableOpacity>								
		</View>
	)
    }
}

