import React,{Component} from 'react'
import {
    Modal,
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedBack,
    DeviceEventEmitter
}from 'react-native'

import {hradio,wradio} from '../../radio'


export default class ShareShop extends Component{
    constructor(props){
        super(props)
        this.state={
            shareShop:false,
        }
        
    }
    componentWillMount(){
	DeviceEventEmitter.addListener('shareShop',(visible)=>{
            this.setState({shareShop:visible})
	})
    }
    render(){
        return(
                <Modal
            style={{flex:1}}
            visible={this.state.shareShop}
            transparent={true}
            onRequestClose={() => {alert("Modal has been closed.")}}
                >
		<TouchableOpacity
	    onPress={()=>{DeviceEventEmitter.emit('shareShop',false)}}
		>
		<Image
	    source={require('./static/bg.png')}
	    style={{height:hradio*1280,width:wradio*720}}
		>
		<Image
	    source={require('./static/modal.png')}
	    style={{height:hradio*403,width:wradio*580,marginTop:hradio*300,alignSelf:'center'}}
		>
		<TouchableOpacity
	    onPress={()=>{this.props.navigate('HomeScreen')}}
		>
		<Image
	    source={require('./static/weChat.png')}
	    style={{height:hradio*81,width:wradio*578,marginTop:hradio*100,alignSelf:'center'}}
		/>		
		</TouchableOpacity>
		<TouchableOpacity
	    onPress={()=>{this.props.navigate('HomeScreen')}}
		>
		<Image
	    source={require('./static/frendCircle.png')}
	    style={{height:hradio*81,width:wradio*578,alignSelf:'center'}}
		/>		
		</TouchableOpacity>
		<TouchableOpacity
	    onPress={()=>{this.props.navigate('HomeScreen')}}
		>
		<Image
	    source={require('./static/qq.png')}
	    style={{height:hradio*81,width:wradio*578,alignSelf:'center'}}
		/>		
		</TouchableOpacity>
		<TouchableOpacity
	    onPress={()=>{this.props.navigate('HomeScreen')}}
		>
		<Image
	    source={require('./static/qqSpace.png')}
	    style={{height:hradio*81,width:wradio*578,alignSelf:'center'}}
		/>		
		</TouchableOpacity>				
		</Image>
		</Image>
		</TouchableOpacity>						
		</Modal>
	)
    }
}
