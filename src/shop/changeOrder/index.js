import React, {Component} from 'react'
import {
    View,
    Image,
    Modal,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    DeviceEventEmitter
} from 'react-native'

import {hradio,wradio} from '../../radio'


export default class ChangeOrder extends Component{
    constructor(props){
	super(props)

    }
    static navigationOptions={
	header:null
    }
    openModal =()=>{
        DeviceEventEmitter.emit('changeModal',true)
    }    
    render(){
	return(
		<View
	    style={{display:'flex',flex:1}}
		>
		<StatusBar
	    translucent={false}
	    backgroundColor='#5eb0fe'
		/>
		<Image
	    source={require('./static/main.png')}
	    style={{width:wradio*720,height:hradio*860}}
		>
		<TouchableOpacity
	    onPress={()=>{this.props.navigation.goBack()}}	    
	    style={{marginLeft:wradio*20,marginTop:hradio*20}}
		>
		<Image
	    source={require('./static/back.png')}
	    style={{width:wradio*22,height:hradio*44}}
		/>
		</TouchableOpacity>		
		<TouchableOpacity
	    style={{marginTop:hradio*358,marginLeft:wradio*20,height:hradio*60,width:wradio*178}}
		>
		<Image
	    source={require('./static/add.png')}
	    style={{width:wradio*178,height:hradio*60}}
		/>
		</TouchableOpacity>
		</Image>
		
		<Image
	    source={require('./static/tabber.png')}
	    style={{width:wradio*720,height:hradio*100,
		    position:'absolute',bottom:0
		   }}
		>
		<TouchableOpacity
	    onPress={()=>{DeviceEventEmitter.emit('changeModal',true)}}
	    style={{marginLeft:wradio*520}}
		>
		<Image
	    source={require('./static/btn.png')}
	    style={{width:wradio*200,height:hradio*100}}
		/>
		</TouchableOpacity>		
		</Image>
		
		</View>
	)
    }
}


