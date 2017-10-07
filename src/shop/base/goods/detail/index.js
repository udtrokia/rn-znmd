import React, {Component} from 'react'
import {
    View,
    Dimensions,
    Image,
    TextInput,
    Keyboard,
    ScrollView,
    StatusBar,
    TouchableWithoutFeedback,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native'

const {height,width}=Dimensions.get('window')
const hradio= height/1280;
const wradio= width/720;

export default class Goods extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions={
	header:null
    }
    render(){
	return(
		<View>
	        <StatusBar
                translucent={true}

                    />
		<Image
	    source={require('./static/detail.png')}
	    style={{height:hradio*1280,width:wradio*720}}
		>
		<TouchableOpacity
	    onPress={()=>this.props.navigation.goBack()}
	    style={{marginTop:hradio*65,marginLeft:wradio*26}}
		>
		<Image
	    source={require('./static/back.png')}
	    style={{width:wradio*20,height:hradio*40,

		   }}
		/>
		</TouchableOpacity>						
		<TouchableOpacity
	    onPress={()=>this.props.navigation.goBack()}
	    style={{marginTop:hradio*540,marginLeft:wradio*550}}
		>
		<Image
	    source={require('./static/add.png')}
	    style={{width:wradio*150,height:hradio*40}}
		/>
		</TouchableOpacity>				
		<Image
	    source={require('./static/tabbar.png')}
	    style={{height:hradio*97,width:wradio*720,position:'absolute',bottom:0}}
		>		
		<TouchableOpacity
	    onPress={()=>this.props.navigation.goBack()}
	    style={{alignSelf:'flex-end'}}
		>
		<Image
	    source={require('./static/btn.png')}
	    style={{width:wradio*200,height:hradio*100}}
		/>
		</TouchableOpacity>		
		</Image>		
	    </Image>
	    </View>
	)
    }
}
