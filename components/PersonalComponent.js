import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, StyleSheet, Alert, ScrollView } from 'react-native'
import { Input } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'; 
import { postTaskP, deleteTaskP } from '../redux/ActionCreator';
import { FlatList} from 'react-native-gesture-handler';


const mapStateToProps = (state) => {
    return {
        TasksP: state.TasksP,

    }
}

const mapDispatchToProps = {
    postTaskP:(taskP) => (postTaskP(taskP)),
    deleteTaskP: taskP => deleteTaskP(taskP)
}

function RenderTasksP(props) {
    const {tasksP} = props;
    const renderTaskItemP = ({item}) => {

        return (
            <View>
                <Text  style={{fontSize:25, fontWeight:'bold', marginLeft: 20, marginBottom:20}}
                 onPress={() => 
                    Alert.alert(
                        'Delete Task?', 
                        'Are you sure you wish to delete the task ' + item.taskP + '?', 
                        [ 
                            {
                                text: 'Cancel',
                                onPress: () => console.log(item.taskP + ' Not Deleted'),
                                style: 'cancel'
                            },
                            {
                                text: 'OK',
                                onPress: () => deleteTaskP(item.taskP)
                            }
                        ],
                        {cancelable: false} 
                    )}>
                 {item.taskP} </Text>
                
            </View>)
         
    }
    return (
            <FlatList
                data={tasksP}
                renderItem={renderTaskItemP}
                keyExtractor={item => item.id.toString()}/>
    )
}

class Personal extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props) 
        this.state = {
            taskP: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);

        }
        

    handleSubmit() {
      
            console.log(JSON.stringify(this.state)),
            this.props.postTaskP(this.state.taskP);
            this.setState({taskP: ''})
        
    }
   
    render() {
        
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}> 
                
                    <Text style={{marginTop:20, alignSelf:'center', fontSize:30, fontWeight:'bold', fontStyle:'italic', color:'#663399'}}>Personal </Text>
                    <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold', fontStyle:'italic', color:'#663399'}}>To Do List</Text>
                    <View style={{marginTop: 20}}>
                    <Input
                        placeholder=" new task"
                        leftIcon = {{type: 'font-awesome',  marginLeft:10, marginRight: 10, name: 'tasks'}}
                        onChangeText= {text=> this.setState({taskP: text})}
                        value={this.state.taskP} />
                    </View>
                    <View style={{marginBottom:10, alignItems:'center'}}>
                        <Button 
                            onPress= {() => {
                                this.handleSubmit();
                            }}
                            color = '#0000CD'
                            title = 'ADD' />
                    </View>
                    <RenderTasksP tasksP={this.props.TasksP.tasksP} />
            
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

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
