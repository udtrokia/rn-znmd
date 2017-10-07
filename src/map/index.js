
import React, {Component} from 'react'
import {
    View,
    Dimensions,
    Image,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView,
    DeviceEventEmitter
} from 'react-native'


const {height,width}=Dimensions.get('window')
const hradio= height/1280;
const wradio= width/720;

export default class ShopBase extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions ={
	header:null
    }
    render(){
	return(
		<View>
		<Image
	    source={require('./static/map.png')}
	    style={{height:hradio*1280,width:wradio*720}}	    
		>
		<Image
	    source={require('./static/nav.png')}
	    style={{height:hradio*97,width:wradio*720,justifyContent:'center'}}
		>
		<TouchableOpacity
	    onPress={()=>this.props.navigation.goBack()}
	    style={{marginLeft:wradio*26}}
		>
		<Image
	    source={require('./static/return.png')}
	    style={{height:hradio*40,width:wradio*20}}
		/>
		</TouchableOpacity>		
		</Image>
		<Image
	    source={require('./static/foot.png')}
	    style={{height:hradio*193,width:wradio*700,
		    marginLeft:wradio*10,marginTop:hradio*920,
		   }}
		>
		<TouchableOpacity
	    style={{marginLeft:wradio*600,marginTop:hradio*120}}
	    onPress={()=>{this.props.navigation.navigate('ShopBase')}}
		>
		<Image
	    source={require('./static/enter.png')}
	    style={{height:hradio*26,width:wradio*76}}
		/>
		</TouchableOpacity>		
	    </Image>
		</Image>
	    </View>
	)	
    }
}
