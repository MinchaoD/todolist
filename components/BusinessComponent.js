import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, ScrollView } from 'react-native'
import { Card, Input } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'; 
import { postTask } from '../redux/ActionCreator'
import { FlatList } from 'react-native-gesture-handler';



const mapStateToProps = (state) => {
    return {
        Tasks: state.Tasks,

    }
}

const mapDispatchToProps = {
    postTask:(task) => (postTask(task)),
}

function RenderTasks({tasks}) {
    const renderTaskItem = ({item}) => {
        return (
            <Text  style={{fontSize:25, fontWeight:'bold', marginLeft: 20, marginBottom:20}}> {item.task}</Text>
        )
    }
    return (
        <Animatable.View animation='fadeInUp' duration={2000} delay={1000}> 
        
            <FlatList
                data={tasks}
                renderItem={renderTaskItem}
                keyExtractor={item => item.id.toString()}/>

        
        </Animatable.View>

    )
}

class Business extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props) 
        this.state = {
            task: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);

        }
        

    handleSubmit() {
      
            console.log(JSON.stringify(this.state)),
            this.props.postTask(this.state.task);
            this.setState({task: ''})
        
    }
   
    render() {
        const tasks = this.props.Tasks.tasks
        
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}> 
                
                    <Text style={{marginTop:20, alignSelf:'center', fontSize:30, fontWeight:'bold', fontStyle:'italic', color:'#663399'}}>Business </Text>
                    <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold', fontStyle:'italic', color:'#663399'}}>To Do List</Text>
                    <View style={{marginTop: 20}}>
                    <Input
                        placeholder="  new task"
                        leftIcon = {{type: 'font-awesome', name: 'tasks'}}
                        onChangeText= {text=> this.setState({task: text})}
                        value={this.state.task} />
                    </View>
                    <View style={{marginBottom:10, alignItems:'center'}}>
                        <Button 
                            onPress= {() => {
                                this.handleSubmit();
                            }}
                            color = '#663399'
                            title = 'ADD' />
                    </View>
                    <RenderTasks tasks={tasks} />
            
                </Animatable.View>
             
            </ScrollView>
            
        )
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Business);
