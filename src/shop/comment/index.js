import React, { Component } from 'react'
import {
    StyleSheet,
    ScrollView,
    StatusBar,
    TextInput,
    Keyboard,
    Modal,
    Image,
    View,
    Text,
    ListView,
    TouchableOpacity,
    DeviceEventEmitter,
    TouchableWithoutFeedback,
} from 'react-native'

import Swiper from 'react-native-swiper'

import {hradio,wradio} from '../../radio'


export default class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
         };
    }
    static navigationOptions={
	header:null
    }
    render(){
	return(
		<View>
		<TouchableWithoutFeedback
	    style={{flex:1}}
	    onPress={()=>{DeviceEventEmitter.emit('commentModal',true)}}
		>
		<Image
	    source={require('./static/main.png')}
	    style={{height:hradio*1230,width:wradio*720}}
		>		
		</Image>
		</TouchableWithoutFeedback>
		<CommentModal navigate={this.props.navigation.navigate}/>
		</View>
	)
    }
}

class CommentModal extends Component{
    constructor(props){
	super(props)
        this.state={
            commentModal:false
        }	
    }
    componentDidMount(){
        DeviceEventEmitter.addListener('commentModal',(visible)=>{
            this.setState({commentModal:visible})
        })
    }
    render(){
	return(
		<Modal
            style={{flex:1}}
            visible={this.state.commentModal}
            transparent={true}
            onRequestClose={() => {alert("Modal has been closed.")}}
		>
		<TouchableWithoutFeedback
	    onPress={()=>{
		this.props.navigate('HomeScreen')
	    }}
		>		
		<Image
	    source={require('./static/bg.png')}
	    style={{width:wradio*720,height:hradio*1280}}
		>
		<Image
	    source={require('./static/modal.png')}
	    style={{
		width:wradio*240,height:hradio*97,
		alignSelf:'center',marginTop:hradio*900
	    }}
		/>		
		</Image>
		</TouchableWithoutFeedback>				
		</Modal>
	)
    }
}