
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
		<TouchableWithoutFeedback
	    onPress={()=>{Keyboard.dismiss()}}
	    style={{
		flex:1,
		backgroundColor:'#ffffff'
		   }}
		>
		<Image
	    source={require('./static/register.png')}
	    style={{height:hradio*1280,width:wradio*720,alignItems:'center'}}
		>
		<View
	    style={{flexDirection:'row',marginTop:85*hradio}}
		>
		<TouchableOpacity
	    onPress={()=>{navigate('HomeScreen')}}
		>
		<Image
	    source={require('./static/close.png')}
	    style={{width:wradio*25,height:hradio*25}}
		/>
		</TouchableOpacity>
		<TouchableOpacity
	    onPress={()=>{navigate('Login')}}	    
	    style={{marginLeft:wradio*580}}
		>
		<Image
	    source={require('./static/login.png')}
	    style={{height:30*hradio,width:60*wradio}}	    
		/>
		</TouchableOpacity>
		</View>
		<View
	    style={{marginTop:hradio*305,marginRight:wradio*5,flexDirection:'row'}}	    
		>
		<TextInput
	    placeholder='手机号'
	    placeholderTextColor="#fff"
	    underlineColorAndroid='transparent'	    
	    style={{width:wradio*375,fontSize:hradio*32,color:'#fff'}} />
		<TouchableOpacity
	    style={{width:wradio*149,height:hradio*30,alignSelf:'center',}}
	    onPress={()=>{Alert.alert('on coding...')}}
		>
		<Image
	    style={{width:wradio*149,height:hradio*30}}
	    source={require('./static/verify.png')}/>
		</TouchableOpacity>		
		</View>
		<TextInput
	    placeholder='验证码'
	    placeholderTextColor="#fff"
	    underlineColorAndroid='transparent'	    
	    style={{marginTop:hradio*3,width:wradio*530,fontSize:hradio*32,color:'#fff'}} />
		<TextInput
	    type='password'
	    placeholder='设置登陆密码'
	    secureTextEntry={true}
	    placeholderTextColor="#fff"
	    underlineColorAndroid='transparent'
	    style={{width:wradio*530,marginTop:hradio*3,fontSize:hradio*32,color:'#fff'}} />		
		<TouchableOpacity
	    style={{marginTop:hradio*115}}
	    onPress={()=>navigate('R_location')}
		>
		<Image
	    style={{height:hradio*85,width:wradio*204}}
	    source={require('./static/register_btn.png')}/>
	    </TouchableOpacity>
		</Image>
		</TouchableWithoutFeedback>
		</View>
	)
    }
}
