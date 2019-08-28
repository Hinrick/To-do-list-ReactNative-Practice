import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList
 } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoal, setCourseGoal] = useState([])
  const [addInput, setAddInput] = useState(false)

  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoal => [
      ...currentGoal
      , {
        uid:Math.random().toString(),
        value:goalTitle
      } ] )
    setAddInput(false)
    // setCourseGoal(currentGoal => console.log(currentGoal))
  }

  const deleteGoalHandler = goalId => {
    setCourseGoal(currentGoal => {
      return currentGoal.filter((goal)=> goal.uid !== goalId )
    })
  }

  const cancelModalHandler = () => {
    setAddInput(false)
    console.log(addInput)
  }

  return (
    <View style={styles.root}>
      <Button title='ADD GOAL ITEM' onPress={() => setAddInput(true)}/>
      <GoalInput onAddGoalInput={addGoalHandler}  onCancel={cancelModalHandler} visible={addInput}/>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.uid }
          data={courseGoal}
          renderItem={ goal =>
            <GoalItem
              onDelete={deleteGoalHandler}
              title={goal.item.value}
              id={goal.item.uid}
            /> }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    padding:50
  }
})
