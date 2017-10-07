
import React, { Component } from 'react'
import {
    StyleSheet,
    Dimensions,
    ScrollView,
    StatusBar,
    TextInput,
    Keyboard,
    Image,
    View,
    Text,
    ListView,
    PixelRatio,
    TouchableOpacity,
    DeviceEventEmitter,    
    TouchableWithoutFeedback,
} from 'react-native'

import Swiper from 'react-native-swiper'
import SearchModal from '../../modal/searchModal'
import ShareModal from '../../modal/shareModal'
import ShareShop from '../../modal/shareShop'
import ShareFriend from '../../modal/shareFriend'
import ChangeModal from '../../modal/changeModal'
import {resize,hradio,wradio} from '../../radio'




export default class Home extends Component{

    constructor(props){
	super(props);
	this.state = {
	    swiperShow:false,
	    statusBar:false
	};
    }
    componentWillMount(){
	setTimeout(()=>{
            this.setState({swiperShow:true});
	},0)
	DeviceEventEmitter.emit('shareModal',false)
	DeviceEventEmitter.emit('shareFriend',false)
	DeviceEventEmitter.emit('shareShop',false)						
	DeviceEventEmitter.emit('commentModal',false)				
    }
    renderSwiper=()=>{
	if(this.state.swiperShow){
	    return(
		    <Swiper
		style={{height:hradio*288,width:wradio*720,marginTop:hradio*80}}
		autoplay={true}
		width={wradio*720}
		height={hradio*288}
		loadMinimalSize={3}
		activeDot={
			<View
		    style={{
			backgroundColor: '#bbbbbb',
			opacity:0.6,
			width: 8,
			height: 8,
			borderRadius: 4,
			marginLeft: 3,
			marginRight: 3,
			marginTop: 8,
			marginBottom: 3,}} />
		}
		dot={
			<View style={{
			    backgroundColor:'rgba(0,0,0,.2)',
			    width: 8,
			    height: 8,
			    borderRadius: 4,
			    marginLeft: 3,
			    marginRight: 3,
			    marginTop: 8,
			    marginBottom: 3,}} />
		}
		    >
		    <Image
		source={require('./static/banner1.png')}
		style={{height:hradio*288,width:wradio*720}}
		    />
		    <Image
		source={require('./static/banner2.png')}
		style={{height:hradio*288,width:wradio*720}}
		    />
		    <Image
		source={require('./static/banner3.png')}
		style={{height:hradio*288,width:wradio*720}}
		    />
		    </Swiper>
	    )
	}
    }
    static navigationOptions={
        header:null,
	tabBarLabel:<Text style={{fontSize:hradio*20}}>首页</Text>,
	tabBarIcon:({focused})=>{
	    if(focused==false){
		return(<Image
		       style={{height:hradio*48,width:wradio*46}}
		       source={require('../static/home.png')} />
		      )}else{
			   return(
				   <Image
			       style={{height:hradio*48,width:wradio*46}}
			       source={require('../static/home_tap.png')} />   
			   )
		       }	    
	}	
    }
    render(){
	const {navigate} = this.props.navigation
	return(
		<View
	    style={{flex:1}}
		>
	    	<TouchableWithoutFeedback	    
	    onPress={()=>{Keyboard.dismiss()}}
		>
		<ScrollView
	    style={{flex:1}}
		>
		<View>
		{this.renderSwiper()}
		<Image
	    source={require('./static/hide.png')}
	    style={{position:'absolute',resizeMode:'stretch',marginTop:hradio*319,height:hradio*60,width:wradio*720}}
		/>
		<Image
	    source={require('./static/activity.png')}
	    style={{height:hradio*385,width:wradio*720,marginTop:hradio*10}}
		/>
		</View>
		<Image
	    source={require('./static/drink.png')}
	    style={{height:hradio*89,width:wradio*720,marginTop:hradio*2}}
		/>
		<ScrollView
	    horizontal={true}
		>
		<TouchableOpacity
	    onPress={()=>{DeviceEventEmitter.emit('searchModal',true)}}
		>
		<Image
	    source={require('./static/drinkl.png')}	    
	    style={{height:hradio*193,width:wradio*920}}
		/>
		</TouchableOpacity>				
		</ScrollView>		
		<Image
	    source={require('./static/snack.png')}
	    style={{height:hradio*89,width:wradio*720,marginTop:hradio*2}}
		/>
		<ScrollView
	    horizontal={true}
		>
		<TouchableOpacity
	    onPress={()=>{DeviceEventEmitter.emit('searchModal',true)}}
		>
		<Image
	    source={require('./static/snackl.png')}	    
	    style={{height:hradio*193,width:wradio*920}}
		/>
		</TouchableOpacity>				
		</ScrollView>
		<Image
	    source={require('./static/daily.png')}
	    style={{height:hradio*89,width:wradio*720,marginTop:hradio*2}}
		/>
		<ScrollView
	    horizontal={true}
		>
		<TouchableOpacity
	    onPress={()=>{DeviceEventEmitter.emit('searchModal',true)}}
		>
		<Image
	    source={require('./static/dailyl.png')}
	    style={{height:hradio*193,width:wradio*920}}
		/>
		</TouchableOpacity>		
		</ScrollView>
		<Image
	    source={require('./static/food.png')}
	    style={{height:hradio*89,width:wradio*720,marginTop:hradio*2}}
		/>
		<ScrollView
	    horizontal={true}
		>
		<TouchableOpacity
	    onPress={()=>{DeviceEventEmitter.emit('searchModal',true)}}
		>
		<Image
	    source={require('./static/foodl.png')}
	    style={{height:hradio*193,width:wradio*920}}
		/>
		</TouchableOpacity>
		</ScrollView>				
		<Image
	    source={require('./static/shop.png')}
	    style={{marginTop:2*hradio,height:hradio*89,width:wradio*720}}
		/>
		<ShopList navigate={navigate} />
		<Image
	    source={require('./static/foot.png')}
	    style={{height:hradio*50,width:wradio*720}}	    
		/>
		</ScrollView>
		</TouchableWithoutFeedback>
		<Search />
		<SearchModal navigate={this.props.navigation.navigate}/>
		<ShareFriend navigate={this.props.navigation.navigate}/>
		<ShareShop navigate={this.props.navigation.navigate}/>
		<ShareModal navigate={this.props.navigation.navigate}/>		
		<ChangeModal navigate={this.props.navigation.navigate}/>
		</View>
	)
    }
}

class Search extends Component{
    openModal =()=>{
	DeviceEventEmitter.emit('searchModal',true)
    }
    render(){
	return(
		<View
	    style={{
		height:hradio*90,
		width:wradio*720,

		alignItems:'center',
		flexDirection:'row',
		backgroundColor:'#54aefc',
		position:'absolute',
	    }}>
		<TouchableOpacity
	    style={{marginLeft:wradio*26}}
		>
		<Image
	    source={require('./static/wlocation.png')}
	    style={{width:wradio*50,height:hradio*60}}
		/>
		</TouchableOpacity>		
		<Image
	    source={require('./static/searchl.png')}
	    style={{width:wradio*210,height:hradio*30,marginLeft:wradio*20}}
		/>
		<Image
	    source={require('./static/search.png')}
	    style={{
		resizeMode:'stretch',
		width:wradio*360,
		opacity:0.7,
		height:hradio*60,
		marginLeft:wradio*35,
	    }}/>
		<TextInput
	    underlineColorAndroid='transparent'
	    placeholder='搜索店铺，商品'
	    onSubmitEditing={()=>{this.openModal()}}

	    style={{
		position:'absolute',
		marginLeft:wradio*365,
		marginTop:hradio*60,
		width:wradio*320,
		fontSize:hradio*26,
		lineHeight:55,
		color:'#666666',
		height:hradio*80,

	    }}/>				
		</View>
	)
    }
}

class ShopList extends Component{
    render(){
	return(
		<View>
		<TouchableOpacity
	    onPress={()=>{this.props.navigate('ShopBase')}}
		>
		<Image
	    source={require('./static/shop1.png')}
	    style={{height:hradio*193,width:wradio*720}}
		>
		<TouchableOpacity
	    style={{alignSelf:'flex-end',marginTop:hradio*60,marginRight:wradio*60}}
	    onPress={()=>{this.props.navigate('Map')}}
		>
		<Image
	    source={require('./static/location.png')}
	    style={{height:hradio*50,width:wradio*40}}	    
		/>
		</TouchableOpacity>
		</Image>
		</TouchableOpacity>
		<TouchableOpacity
	    onPress={()=>{this.props.navigate('ShopBase')}}
		>
		<Image
	    source={require('./static/shop2.png')}
	    style={{height:hradio*193,width:wradio*720}}
		>
		<TouchableOpacity
	    style={{alignSelf:'flex-end',marginTop:hradio*60,marginRight:wradio*60}}
	    onPress={()=>{this.props.navigate('Map')}}	    
		>
		<Image
	    source={require('./static/location.png')}
	    style={{height:hradio*50,width:wradio*40}}	    
		/>
		</TouchableOpacity>
		</Image>
		</TouchableOpacity>
		<TouchableOpacity
	    onPress={()=>{this.props.navigate('ShopBase')}}
		>
		<Image
	    source={require('./static/shop3.png')}
	    style={{height:hradio*193,width:wradio*720}}
		>
		<TouchableOpacity
	    style={{alignSelf:'flex-end',marginTop:hradio*60,marginRight:wradio*60}}
	    onPress={()=>{this.props.navigate('Map')}}	    
		>
		<Image
	    source={require('./static/location.png')}
	    style={{height:hradio*50,width:wradio*40}}	    
		/>
		</TouchableOpacity>
		</Image>
		</TouchableOpacity>
		<TouchableOpacity
	    onPress={()=>{this.props.navigate('ShopBase')}}
		>
		<Image
	    source={require('./static/shop4.png')}
	    style={{height:hradio*193,width:wradio*720}}
		>
		<TouchableOpacity
	    style={{alignSelf:'flex-end',marginTop:hradio*60,marginRight:wradio*60}}
	    onPress={()=>{this.props.navigate('Map')}}	    
		>
		<Image
	    source={require('./static/location.png')}
	    style={{height:hradio*50,width:wradio*40}}	    
		/>
		</TouchableOpacity>
		</Image>
		</TouchableOpacity>
		<TouchableOpacity
	    onPress={()=>{this.props.navigate('ShopBase')}}
		>
		<Image
	    source={require('./static/shop5.png')}
	    style={{height:hradio*193,width:wradio*720}}
		>
		<TouchableOpacity
	    style={{alignSelf:'flex-end',marginTop:hradio*60,marginRight:wradio*60}}
	    onPress={()=>{this.props.navigate('Map')}}	    
		>
		<Image
	    source={require('./static/location.png')}
	    style={{height:hradio*50,width:wradio*40}}	    
		/>
		</TouchableOpacity>
		</Image>
		</TouchableOpacity>
		</View>
	)
    }
}
