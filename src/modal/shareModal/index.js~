import React,{Component} from 'react'
import {
    Modal,
    View,
    Text,
    Image,
    TouchableOpacity,
    DeviceEventEmitter
}from 'react-native'

import {hradio,wradio} from '../../radio'

import ShareFriend from '../../modal/shareFriend'

export default class SearchModal extends Component{
    constructor(props){
        super(props)
        this.state={
            shareModal:false,
	    share:false
        }
    }
    componentWillMount(){

    }
    componentDidMount(){
        DeviceEventEmitter.addListener('shareModal',(visible)=>{
            this.setState({shareModal:visible})
        })
    }
    render(){
	    return(
		    <Modal
		style={{flex:1}}
		visible={this.state.shareModal}
		transparent={true}
		onRequestClose={() => {alert("Modal has been closed.")}}
		    >
		    <Image
		style={{height:hradio*1280,width:wradio*720}}
		source={require('./static/bg.png')}
		    >
		    <Image
		style={{alignSelf:'center',marginTop:hradio*200,width:wradio*580,
			height:hradio*720,justifyContent:'center',alignItems:'center',
			flexDirection:'row'
		       }}
		source={require('./static/modal.png')}
		    >
		    <TouchableOpacity
		style={{marginTop:hradio*600,margin:wradio*30}}
		onPress={()=>{this.props.navigate('HomeScreen')}}
		    >
		    <Image
		source={require('./static/btn1.png')}
		style={{width:wradio*180,height:hradio*60}}
		    />
		    </TouchableOpacity>
		    <TouchableOpacity
		onPress={()=>{
		    DeviceEventEmitter.emit('shareModal',false)		    
		    DeviceEventEmitter.emit('shareFriend',true)
		}}
		style={{
		    margin:wradio*30,marginTop:hradio*600		
		}}
		    >
		    <Image
		source={require('./static/btn2.png')}
		style={{width:wradio*180,height:hradio*60}}
		    />
		    </TouchableOpacity>		
		    </Image>
		    </Image>
		    </Modal>
	    )

    }
}
