/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Video = require('react-native-video');
var Overlay = require('react-native-overlay');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  PixelRatio,
  TextInput
} = React;

var fancyLogin = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Video source={{uri: "background"}} // Can be a URL or a local file.
         rate={1.0}                   // 0 is paused, 1 is normal.
         volume={1.0}                 // 0 is muted, 1 is normal.
         muted={false}                // Mutes the audio entirely.
         paused={false}               // Pauses playback entirely.
         resizeMode="cover"           // Fill the whole screen at aspect ratio.
         repeat={true}                // Repeat forever.
         onLoadStart={this.loadStart} // Callback when video starts to load
         onLoad={this.setDuration}    // Callback when video loads
         onProgress={this.setTime}    // Callback every ~250ms with currentTime
         onEnd={this.onEnd}           // Callback when playback finishes
         onError={this.videoError}    // Callback when video cannot be loaded
         style={styles.backgroundVideo} />
        <View style={styles.imageWrapper}>
          <Image
            style={styles.logo}
            source={require("image!logo")} />
        </View>
        <View style={styles.loginWrapper}>
          <View style={styles.login}>
            <TextInput 
            style={styles.textBox}
            placeholder="username"
            placeholderTextColor="orange"/>
            <TextInput
            style={styles.textBox}
            placeholder="password" 
            placeholderTextColor="orange" 
            secureTextEntry="true"/>
          </View>
          <Text  style={styles.forgotPassword}>Forgot password</Text>
          <View style={styles.signInButtonContainer}>
            <Text style={{color:"white",}}>Sign In</Text>
          </View>
          <Text style={{color:"orange",marginTop:20}}>Dont have account?<Text style={{fontWeight:"bold"}}> Sign Up</Text></Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  logo:{
    width:201,
    height:75,
    marginTop:40,
    marginBottom:20,
    tintColor:"orange",
    backgroundColor: 'rgba(0,0,0,0)',
    opacity:1
  },
  imageWrapper:{
    alignItems:"center",
    width:PixelRatio.getPixelSizeForLayoutSize(200),
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  loginWrapper:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    marginTop:PixelRatio.getPixelSizeForLayoutSize(),
    width:PixelRatio.getPixelSizeForLayoutSize(200),
    backgroundColor: 'rgba(0,0,0,0.4)',
    height:80,
    alignItems:"center"
  },
  login:{
    marginTop:150,
    width:PixelRatio.getPixelSizeForLayoutSize(130),
    backgroundColor: 'rgba(0,0,0,0.2)',
    height:80,
    alignItems:"center"
  },
  signInButtonContainer:{
    width:PixelRatio.getPixelSizeForLayoutSize(150),
    backgroundColor:"orange",
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    height:60
  },
  textBox:{
    height: 40,
    left:5,
    color:"orange"
  },
  forgotPassword:{
    color:"orange",
    marginTop:10,
    fontWeight:"bold"
  },
});

AppRegistry.registerComponent('fancyLogin', () => fancyLogin);
