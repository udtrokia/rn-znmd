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
    DeviceEventEmitter
} from 'react-native'

import {hradio,wradio} from '../../radio'


export default class ChangeModal extends Component{
    constructor(props){
	super(props)
	this.state={
	    changeModal:false
	}    
    }
    componentDidMount(){
        DeviceEventEmitter.addListener('changeModal',(visible)=>{
            this.setState({changeModal:visible})
        })
    }
    render(){
	return(
                <Modal
            style={{flex:1}}
            visible={this.state.changeModal}
            transparent={true}
            onRequestClose={() => {alert("Modal has been closed.")}}
                >
		<Image
	    source={require('./static/bg.png')}
	    style={{height:hradio*1280,width:wradio*720}}
		>
		<Image
	    source={require('./static/modal.png')}
	    style={{
		height:hradio*360,width:wradio*580,
		alignSelf:'center',marginTop:hradio*400,
		flexDirection:'row'
		   }}
		>
		<TouchableOpacity
	    onPress={()=>{
		this.props.navigate('ShopBase')
	    }}
	    style={{
		width:wradio*290,height:hradio*90,
		justifyContent:'center',alignItems:'center',marginTop:hradio*270
		   }}
		>
		<Image
	    source={require('./static/submit.png')}
	    style={{width:wradio*60,height:hradio*30}}
		/>
		</TouchableOpacity>
		<TouchableOpacity
	    onPress={()=>{this.setState({changeModal:false})}}
	    style={{
		width:wradio*290,height:hradio*90,
		justifyContent:'center',alignItems:'center',marginTop:hradio*270
		   }}
		>
		<Image
	    source={require('./static/cancel.png')}
	    style={{width:wradio*60,height:hradio*30}}
		/>
		</TouchableOpacity>				
		</Image>
		</Image>
		</Modal>		
	)
    }
}
