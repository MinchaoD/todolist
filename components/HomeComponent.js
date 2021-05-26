import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Home extends Component {
  
    render() {
        const { navigate } = this.props.navigation; 
        const styles = StyleSheet.create({
            container: {
            flex: 1, fontSize:50, fontStyle: 'italic', fontWeight:'bold', textAlign:'center',textAlignVertical: 'center'},

            title:{
               
                backgroundColor: '#fdcb6e',
                margin: 50,
                borderBottomLeftRadius:60,
                borderTopRightRadius: 20,
               
            }})
        

        return (
            <View style={[ styles.container, { flexDirection:"column" }]}>
                <Text style = {[styles.container, styles.title]}> To Do List</Text>
                <Text style={[styles.container, {flex: 2, backgroundColor: "#d4d4f7", fontSize:30}]} onPress={() => navigate('Personal')}> Personal </Text>
                <Text style={[styles.container, {flex: 2, backgroundColor: "#ADD8E6", fontSize:30}]}  onPress={() => navigate('Business')}> Business </Text>
          
            </View>
        )
    }
}


export default Home;