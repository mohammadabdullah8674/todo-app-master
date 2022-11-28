import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import todoContext from '../Context';


const Todos = ({ todoList, tabs }) => {
  const context = useContext(todoContext);
  const { clearAll } = context;
  
  return (
    <div className='todoList'>
      {
        todoList?.map(item => <TodoItem key={item?.id} item={item}  tabs={tabs}/>)
      }

      {tabs === "Completed" &&
        <div className='deleteAll'>
          <button className='deleteAllBtn' onClick={clearAll}>
            <DeleteOutlineIcon />
            <p>delete all</p>
          </button>
        </div>
      }
    </div>
  )
}

export default Todos