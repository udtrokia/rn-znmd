
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

import {resize_h,resize_w,hradio,wradio} from '../../radio'

export default class Login extends Component{

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
	    source={require('./static/login_page.png')}
	    style={{height:hradio*1280,width:wradio*720,alignItems:'center'}}
		>
		<TextInput
	    placeholder='账号'
	    placeholderTextColor="#fff"
	    underlineColorAndroid='transparent'	    
	    style={{marginTop:hradio*515,width:wradio*530,fontSize:hradio*32,color:'#fff'}} />
		<TextInput
	    type='password'
	    placeholder='密码'
	    secureTextEntry={true}
	    placeholderTextColor="#fff"
	    underlineColorAndroid='transparent'
	    style={{width:wradio*530,marginTop:hradio*3,fontSize:hradio*32,color:'#fff'}} />		
		<TouchableOpacity
	    style={{marginTop:hradio*115}}
	    onPress={()=>Alert.alert('on coding...')}
		>
		<Image
	    style={{height:hradio*84,width:wradio*204}}
	    source={require('./static/login_btn.png')}/>
	    </TouchableOpacity>
		<TouchableOpacity
	    style={{marginTop:hradio*10}}
	    onPress={() => navigate('Register')}	    	    
		>
		<Image
	    style={{height:hradio*24,width:wradio*96}}
	    source={require('./static/register.png')}/>
		</TouchableOpacity>		
		</Image>
		</TouchableWithoutFeedback>
		</View>
	)
    }
}
