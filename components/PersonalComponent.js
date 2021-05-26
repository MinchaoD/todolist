// import React, { Component, useState } from 'react'
// import { View, StyleSheet,Text,ScrollView, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

// class Personal extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             todoitem:'',
//             addtolist:'',
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleAdd = this.handleAdd.bind(this);
//     }

//     handleChange(event) {
//         this.setState({
//             todoitem: event.target.value,
//         })
//     }

//     handleAdd(event) {
//         addtolist((preValue) => {
//               return [todoitem, ...preValue];
//              });
//              todoitem("");
//         }

//     render(){
//         const styles= StyleSheet.create({
//             input: {
//               height: 40,
//               margin: 12,
//               borderWidth: 1,
//             },
//             button:{
//                 width:100,
//                 alignSelf: 'center',
        
//             },
//             text: {
//                 backgroundColor: "#d4d4f7", fontSize:30,  fontStyle: 'italic', fontWeight:'bold', textAlign:'center',textAlignVertical: 'center'
//             }
//           });
//         const {todoitem} = this.state;

//    return (
//       <View >
//         <Text style={[styles.text,{paddingTop:20}]}> Personal </Text>
//         <Text style={[styles.text, {fontSize:20,paddingBottom:20, marginBottom:30}]}>To-Do List</Text>
//         <TextInput
//             style={styles.input}
//             onChangeText= {this.handleChange}
//             value={todoitem}>
//         </TextInput>
//         <View    style={styles.button}>
//         <Button
//            title = "Add"/>
//         {/* //    onPress={handleAdd}
//         //    value={addtolist}/> */}
//         </View>
//         {/* <FlatList
//             data={addToList}
//             renderItem={
//              addToList.map((list, index) => (
//             <ToDoItem
//               key={index}
//               id={index}
//               text={list}
//               onChecked={DeleteItem}/>))}
//         />
//           */}
//       </View>
//   );
// }}


// export default Personal;

import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [thingsToDo, setThings] = useState("");
  const [addToList, setList] = useState([]);
  function addThings(event) {
    setThings(event.target.value);
  }
  function addList(event) {
    setList((preValue) => {
      return [thingsToDo, ...preValue];
    });
    setThings("");
  }

  function deleteItem(id) {
    setList((preValue) => {
      return preValue.filter((item, index) => {
        return index != id;
      });
    });
  }

  return (
    <div className="container">
      <div>
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={addThings} type="text" value={thingsToDo} />
        <button>
          <span onClick={addList} value={addToList}>
            Add
          </span>
        </button>
      </div>
      <div>
        <ul>
          {addToList.map((list, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={list}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;

