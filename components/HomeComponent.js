import React, { Component } from 'react';
import { Text, StyleSheet, View, Animated, Easing } from 'react-native';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';

class Home extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
     
          viewOpacityAnimValue: new Animated.Value(1)
        };     
      }

      componentDidMount() {
          this.animateViewOpacity() // use this componentDidMount so that when 
          //the page is loaded, the animation will start automatically, if no this
          // line of code, then we need an onPress or onClick button to start the animation
      }

    
      animateViewOpacity() {
        this.state.viewOpacityAnimValue.resetAnimation();
      // if we want this animation run forever, then we add Animated.loop(  ) outside Animated.timing( ...)
        Animated.timing(
          this.state.viewOpacityAnimValue,
          {
            toValue: 0,
            duration: 10000,
            easing: Easing.elastic(),
            useNativeDriver: true
          }
        ).start();
      }

    render() {
        
          const opacityAni = this.state.viewOpacityAnimValue.interpolate({
            inputRange: [0, 1],
           outputRange: [1, 0]
      
          })

        const { navigate } = this.props.navigation; 
        const styles = StyleSheet.create({
            container: {
            flex: 1, fontSize:50, fontStyle: 'italic', fontWeight:'bold', textAlign:'center',textAlignVertical: 'center'},
            icon: {
                marginLeft: 100,
                
            },
            title:{
               
                backgroundColor: '#fdcb6e',
                margin: 50,
                borderBottomLeftRadius:60,
                borderTopRightRadius: 20,
               
            }})
        

        return (
            <View style={[ styles.container, { flexDirection:"column" }]}>
                
                <Text style = {[styles.container, styles.title]}> To Do List</Text>
                <Animated.View style={{
                    opacity: opacityAni,
                    flex:2,
                    flexDirection: "row",
                    backgroundColor: '#87CEEB',
                    alignItems: "center"
                }}>
                    <Icon type='font-awesome' name= 'home' iconStyle={[styles.icon]} size={40}/>
                    <Text style={[styles.container, {fontSize:30, marginRight: 100}]} onPress={() => navigate('Personal')}> Personal </Text>
                    
                </Animated.View>
                <Animated.View style={{
                    opacity: opacityAni,
                    flex:2,
                    flexDirection: "row",
                    backgroundColor: '#4682B4',
                    alignItems: "center"
                }}>
                    <Icon type='font-awesome' name= 'building' iconStyle={[styles.icon]} size={30} />
                    <Text style={[styles.container, {marginRight: 100, fontSize:30}]}  onPress={() => navigate('Business')}> Business </Text>
                </Animated.View>
            </View>
        )
    }
}
export default Home;