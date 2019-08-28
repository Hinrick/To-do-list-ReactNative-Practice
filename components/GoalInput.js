import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal
 } from 'react-native'


const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const inputTextHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const onAddGoalInputHandler = () => {
    props.onAddGoalInput(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={inputTextHandler}
        />
        <View style={styles.button}>
          <Button
            color='red'
            title='CANCEL'
            onPress={props.onCancel}
           />
          <Button
            title='ADD'
            onPress={onAddGoalInputHandler}
           />
       </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    borderBottomColor:'gray',
    borderBottomWidth:1,
    padding:10,
    width:'80%'
  },
  button:{
    flexDirection: 'row'
  }
})

export default GoalInput
