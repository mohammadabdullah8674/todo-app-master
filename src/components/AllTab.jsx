import React, { useContext } from 'react'
import todoContext from '../Context';
import SearchBox from './SearchBox'
import Todos from './Todos'

const AllTab = () => {
  const context = useContext(todoContext);
  const { todoList , tabs } = context;
  return (
    <div>
        <SearchBox />
        <Todos todoList={todoList} tabs={tabs}/>
    </div>
  )
}

export default AllTab