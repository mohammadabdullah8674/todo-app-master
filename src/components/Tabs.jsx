import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import todoContext from '../Context';

const Tabs = () => {
  const context = useContext(todoContext);
  const { tabs, setTabs, todoList } = context;
  const [allcount, setAllCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);

  useEffect(() => {
    const allcounting = todoList?.length
    const activeCounting = todoList.filter((item) => item.active)
    const completeCounting = todoList.filter((item) => item.completed)
    setAllCount(allcounting);
    setActiveCount(activeCounting?.length);
    setCompleteCount(completeCounting?.length);
  }, [todoList]);
  
  return (
    <div className='tabs'>
      <div style={{ borderBottom: tabs === "All" ? "3px solid #2F80ED" : "" }}>
        <button onClick={() => setTabs("All")}>All</button>
        <span className='count'>{allcount}</span>
      </div>
      <div style={{ borderBottom: tabs === "Active" ? "3px solid #2F80ED" : "" }}>
        <button onClick={() => setTabs("Active")}>Active</button>
        <span className='count'>{activeCount}</span>
      </div>
      <div  style={{ borderBottom: tabs === "Completed" ? "3px solid #2F80ED" : "" }} >
        <button onClick={() => setTabs("Completed")}>Completed</button>
        <span className='count'>{completeCount}</span>
      </div>
    </div>
  )
}

export default Tabs