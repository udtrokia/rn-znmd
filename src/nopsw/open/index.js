import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    View,
    Image,
    Text
} from 'react-native'

import {hradio,wradio} from '../../radio'

export default class Face extends Component{
    static navigationOptions={
	header:null
    }
    render(){
	return(
                <View	    
	    style={{
		flex:1,
		backgroundColor:'#f2f2f2'}}
		>
                <StatusBar
            backgroundColor='#54aefc'
                />
                <Image
            source={require('./static/title.png')}
            style={{width:wradio*720,height:hradio*97}}
                >
                <TouchableOpacity
	    style={{marginLeft:wradio*20,marginTop:hradio*28}}
            onPress={()=>{this.props.navigation.goBack()}}
                >
                <Image
            source={require('./static/back.png')}
            style={{height:hradio*40,width:wradio*22}}
                />
                </TouchableOpacity>
                <Image
            source={require('./static/bg.png')}
            style={{
		height:hradio*1000,width:wradio*720,marginTop:hradio*29}}
                >
		<TouchableOpacity
	    style={{marginTop:hradio*920,}}
	    onPress={()=>{this.props.navigation.navigate('N_face')}}
		>
		<Image
	    source={require('./static/button.png')}
	    style={{
		    height:hradio*102,
		    width:wradio*222,

		    alignSelf:'center'}}
		/>
		</TouchableOpacity>		
		</Image>
            </Image>		
            </View>
        )
    }
}


