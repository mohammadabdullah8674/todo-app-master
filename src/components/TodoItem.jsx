import React, { useContext } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import todoContext from '../Context';

const TodoItem = ({ item }) => {
    const context = useContext(todoContext);
    const { tabs, completeItem, deleteItem } = context;
    function handleChecked(e) {
        const targetId = e.target.getAttribute("for");
        completeItem(targetId);
    }
    function handleDelete (e) {
        const targetId = e.target.parentNode.getAttribute("data-id")
        deleteItem(targetId);
    }
    return (
        <div className='list'>
            <div className='item'>
                <input htmlFor={item.id} type="checkbox" name="checkbox" id="checkbox" onChange={handleChecked} checked={item.completed} />
                <p style={{textDecoration : item.completed && "line-through", color : item.completed && "rgb(120 120 120)" }} id={item.id}>{item.task}</p>
            </div>
            {tabs === "Completed" &&
                <div data-id={item.id} onClick={handleDelete} className='deleteLogo'>
                    <DeleteOutlineIcon />
                </div>
            }
        </div>
    )
}

export default TodoItem