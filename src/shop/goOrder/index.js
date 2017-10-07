import React, {Component} from 'react'
import {
    View,
    Image,
    TextInput,
    Keyboard,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StatusBar,
    DeviceEventEmitter
} from 'react-native'


import {hradio,wradio} from '../../radio'

export default class Comment extends Component{
    static navigationOptions={
	header:null
    }
    constructor(props){
	super(props)
    }
    render(){
        return(
		<View
	    style={{backgroundColor:'#f2f2f2'}}
		>
		<StatusBar
	    translucent={true}
		/>
		<Image
	    source={require('./static/bg.png')}
	    style={{height:hradio*1280,width:wradio*720,justifyContent:'flex-end'}}
		>
		<View
	    style={{flexDirection:'row',marginBottom:hradio*1070}}
		>
		<TouchableOpacity
	    onPress={()=>{this.props.navigation.goBack()}}
	    style={{marginLeft:wradio*26}}
		>
		<Image
	    source={require('./static/return.png')}
	    style={{height:hradio*40,width:wradio*20}}
		/>
		</TouchableOpacity>
		</View>			
		<Image
	    source={require('./static/foot.png')}
	    style={{
		width:wradio*720,height:hradio*97
	    }}>
		<TouchableOpacity
	    style={{alignSelf:'flex-end'}}
	    onPress={()=>{ DeviceEventEmitter.emit('shareModal',true)}}
		>
		<Image
	    source={require('./static/btn.png')}
	    style={{
		width:wradio*200,height:hradio*97
	    }}
		/>
		</TouchableOpacity>		
		</Image>
		</Image>
		</View>
	)
    }
}
