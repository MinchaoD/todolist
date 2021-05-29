import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, StyleSheet, Alert, ScrollView } from 'react-native'
import { Input } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'; 
import { postTask, deleteTask } from '../redux/ActionCreator';
import { FlatList} from 'react-native-gesture-handler';


const mapStateToProps = (state) => {
    return {
        Tasks: state.Tasks,
    }
}

const mapDispatchToProps = {
    postTask:(task) => (postTask(task)),
    deleteTask: task => deleteTask(task)
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
        const {tasks} = this.props;
        const renderTaskItem = ({item}) => {
            return (
                <View>
                    <Text  style={{fontSize:25, fontWeight:'bold', marginLeft: 20, marginBottom:20}}
                     onPress={() => 
                        Alert.alert(
                            'Delete Task?', 
                            'Are you sure you wish to delete the task ' + item.task + '?', 
                            [ 
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log(item.task + ' Not Deleted'),
                                    style: 'cancel'
                                },
                                {
                                    text: 'OK',
                                    onPress: () => {this.props.deleteTask(item.task)}
                                }
                            ],
                            {cancelable: false} 
                        )}>
                     {item.task} </Text>
                    
                </View>)
             
        }
        
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}> 
                
                    <Text style={{marginTop:20, alignSelf:'center', fontSize:30, fontWeight:'bold', fontStyle:'italic', color:'#663399'}}>Business </Text>
                    <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold', fontStyle:'italic', color:'#663399'}}>To Do List</Text>
                    <View style={{marginTop: 20}}>
                    <Input
                        placeholder=" new task"
                        leftIcon = {{type: 'font-awesome', marginLeft:10, marginRight: 10, name: 'tasks'}}
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
                    <FlatList
                data={this.props.Tasks.tasks}
                renderItem={renderTaskItem}
                keyExtractor={item => item.id.toString()}/>
            
                </Animatable.View>
             
            </ScrollView>
            
        )
    }
} 

const styles = StyleSheet.create({
    deleteView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    deleteTouchable: {
        backgroundColor: 'grey',
        height: '100%',
        justifyContent: 'center'
    },
    deleteText: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 16,
        width: 70
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Business);
