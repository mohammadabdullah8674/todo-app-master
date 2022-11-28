import React, { useContext } from 'react'
import todoContext from '../Context';
import SearchBox from './SearchBox'
import Todos from './Todos'

const ActiveTab = () => {
  const context = useContext(todoContext);
  const { todoList , tabs } = context;
  const activeList = todoList?.filter((item)=> item.active && item)
  return (
    <div>
        <SearchBox />
        <Todos todoList={activeList} tabs={tabs} />
    </div>
  )
}

export default ActiveTab