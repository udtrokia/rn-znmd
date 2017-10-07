
import React, {Component} from 'react'
import {
    View,
    Image,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView,
    DeviceEventEmitter
} from 'react-native'

import Goods from './goods'
import Comment from './comment'
import Shop from './shop'

import {hradio,wradio} from '../../radio'


export default class ShopBase extends Component{
    constructor(props){
	super(props)
	this.state={
	    _switch:1
	}
    }
    componentDidMount(){
	DeviceEventEmitter.emit('searchModal',false)
	DeviceEventEmitter.emit('changeModal',false)	
    }
    static navigationOptions={
	header:null
    }
    renderSwitch=()=>{
	if(this.state._switch==1){
	    return(
		    <View
		style={{
		    height:hradio*81,width:wradio*720,backgroundColor:'#fff',
		    alignItems:'center',justifyContent:'space-around',flexDirection:'row',
		    borderWidth:1,borderColor:'#eeeeee'
		}}
		    >
		    <TouchableOpacity
		onPress={()=>{this.setState({_switch:1})}}
		    >
		    <Image
		source={require('./static/goodstap.png')}
		style={{height:hradio*24,width:wradio*47}}
		    />
		    </TouchableOpacity>
		    <TouchableOpacity
		onPress={()=>{this.setState({_switch:2})}}
		    >
		    <Image
		source={require('./static/comment.png')}
		style={{height:hradio*24,width:wradio*47}}
		    />
		    </TouchableOpacity>
		    <TouchableOpacity
		onPress={()=>{this.setState({_switch:3})}}
		    >
		    <Image
		source={require('./static/shop.png')}
		style={{height:hradio*24,width:wradio*47}}
		    />
		    </TouchableOpacity>		    
		    </View>
	    )
	}else if(this.state._switch==2){
	    return(
		    <View
		style={{
		    height:hradio*81,width:wradio*720,backgroundColor:'#fff',
		    alignItems:'center',justifyContent:'space-around',flexDirection:'row',
		    borderWidth:1,borderColor:'#eeeeee'		    
		}}		
		    >
		    <TouchableOpacity
		onPress={()=>{this.setState({_switch:1})}}
		    >
		    <Image
		source={require('./static/goods.png')}
		style={{height:hradio*24,width:wradio*47}}
		    />
		    </TouchableOpacity>
		    <TouchableOpacity
		onPress={()=>{this.setState({_switch:2})}}
		    >
		    <Image
		source={require('./static/commenttap.png')}
		style={{height:hradio*24,width:wradio*47}}
		    />
		    </TouchableOpacity>
		    <TouchableOpacity
		onPress={()=>{this.setState({_switch:3})}}
		    >
		    <Image
		source={require('./static/shop.png')}
		style={{height:hradio*24,width:wradio*47}}
		    />
		    </TouchableOpacity>		    
		    </View>
	    )
	}else{
	    return(
		    <View
		style={{
		    height:hradio*81,width:wradio*720,backgroundColor:'#fff',
		    alignItems:'center',justifyContent:'space-around',flexDirection:'row',
		    borderWidth:1,borderColor:'#eeeeee'		    
		}}
		    >
		    <TouchableOpacity
		onPress={()=>{this.setState({_switch:1})}}
		    >
		    <Image
		source={require('./static/goods.png')}
		style={{height:hradio*24,width:wradio*47}}
		    />
		    </TouchableOpacity>
		    <TouchableOpacity
		onPress={()=>{this.setState({_switch:2})}}
		    >
		    <Image
		source={require('./static/comment.png')}
		style={{height:hradio*24,width:wradio*47}}
		    />
		    </TouchableOpacity>
		    <TouchableOpacity
		onPress={()=>{this.setState({_switch:3})}}
		    >
		    <Image
		source={require('./static/shoptap.png')}
		style={{height:hradio*24,width:wradio*47}}
		    />
		    </TouchableOpacity>		    
		    </View>
	    )
	}
    }
    renderContent(){
	if(this.state._switch==1){
	    return(
		    <Goods navigate={this.props.navigation.navigate}/>
	    )
	}else if(this.state._switch==2){
	    return(
		    <Comment />
	    )
	}else{
	    return(
		    <Shop />
	    )
	}
    }
    render(){
	return(

                <TouchableWithoutFeedback
            onPress={()=>{Keyboard.dismiss()}}
	    style={{flex:1}}
                >
		<View
	    style={{flex:1}}
		>
		<Image
	    source={require('./static/title.png')}
	    style={{height:hradio*287,width:wradio*720}}
		>
		<View
	    style={{flexDirection:'row'}}
		>
		<TouchableOpacity
	    style={{marginTop:hradio*30,marginLeft:wradio*20}}
	    onPress={()=>{this.props.navigation.goBack()}}
		>
		<Image
	    source={require('./static/back.png')}
	    style={{height:hradio*40,width:wradio*22}}
		/>
		</TouchableOpacity>
		<TouchableOpacity
	    style={{marginTop:hradio*30,marginLeft:wradio*620}}
	    onPress={()=>{DeviceEventEmitter.emit('shareShop',true)}}
		>
		<Image
	    source={require('./static/share.png')}
	    style={{height:hradio*38,width:wradio*38}}
		/>
		</TouchableOpacity>		
		</View>
		<TouchableOpacity
	    style={{alignSelf:'flex-end',marginTop:hradio*70,marginRight:wradio*65}}
	    onPress={()=>{this.props.navigation.navigate('Map')}}
		>
		<Image
	    source={require('./static/location.png')}
	    style={{height:hradio*50,width:wradio*40}}
		/>
		</TouchableOpacity>		
		</Image>
		<View
	    style={{width:wradio*720,height:hradio*102,backgroundColor:'#fff'}}
		>
		<Image
	    source={require('./static/search.png')}
	    style={{alignSelf:'center',height:hradio*80,
		    width:wradio*688,marginTop:hradio*10}}
		>
		<TextInput
            underlineColorAndroid='transparent'
            placeholder='搜索店铺内商品'
            onEndEditing={()=>{}}	    
	    style={{alignSelf:'center',width:wradio*588,height:hradio*80}}
		/>
		</Image>
		</View>

		{this.renderSwitch()}
	    {this.renderContent()}
		</View>	
            </TouchableWithoutFeedback>		

	)
    }
}
