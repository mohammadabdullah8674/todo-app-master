import React, { useContext } from 'react'
import todoContext from '../Context';
import Todos from './Todos'


const CompletedTab = () => {
  const context = useContext(todoContext);
  const { todoList , tabs } = context;
  const completedList = todoList?.filter((item)=> item.completed && item)
  return (
    <div>
        <Todos todoList={completedList} tabs={tabs} />    
    </div>
  )
}

export default CompletedTab