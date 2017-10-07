
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
    Text
} from 'react-native'

import {hradio,wradio} from '../../radio'

export default class Register extends Component{

    static navigationOptions={
        header:null,
    }
    render(){
	const {navigate} = this.props.navigation		
	return(
	    <View>
		<StatusBar
	    animated={true}
	    translucent={true}
	    backgroundColor='transparent'
		/>
		<Image
	    source={require('./static/bg.png')}
	    style={{width:wradio*720,height:hradio*1280}}
		>
		<TouchableOpacity
	    style={{marginTop:hradio*70,marginLeft:wradio*30}}
	    onPress={()=>{navigate('HomeScreen')}}	    
		>		
		<Image
	    source={require('./static/close.png')}
	    style={{width:wradio*25,height:hradio*25}}
		/>
		</TouchableOpacity>
		<TouchableOpacity
	    style={{alignSelf:'center',marginTop:hradio*450}}
	    onPress={()=>{navigate('R_map')}}
		>
		<Image
	    source={require('./static/location.png')}
	    style={{width:wradio*620,height:hradio*96}}
		/>
		</TouchableOpacity>		
		<TouchableOpacity
	    style={{alignSelf:'center',marginTop:hradio*200}}
	    onPress={()=>{navigate('R_map')}}
		>
		<Image
	    source={require('./static/btn.png')}
	    style={{width:wradio*264,height:hradio*84}}
		/>
		</TouchableOpacity>
		<TouchableOpacity
	    style={{alignSelf:'center',marginTop:hradio*10}}
	    onPress={()=>{navigate('HomeScreen')}}	    
		>		
		<Image
	    source={require('./static/jump.png')}
	    style={{width:wradio*120,height:hradio*30}}
		/>
		</TouchableOpacity>		
		</Image>
		</View>
	)
    }
}
