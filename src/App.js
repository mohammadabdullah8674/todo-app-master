import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Tabs from './components/Tabs'
import CompletedTab from './components/CompletedTab'
import AllTab from './components/AllTab'
import ActiveTab from './components/ActiveTab'
import todoContext from './Context'

const App = () => {
  const [tabs, setTabs] = useState("All");

  const [list, setList] = useState(JSON.parse( localStorage.getItem("todoLocal")) || []);
  useEffect(()=> {
    console.log(list);
    if(list.length === 0) {
      return
    }
    if(list.length) {
      localStorage.setItem("todoLocal", JSON.stringify(list));
    }
  }, [list])

  function addItem(input) {
    if(input) {
      const newItem = {
        id : uuidv4(),
        task : input,
        active : true,
        completed : false
      }
      setList(prevList => {
        return [...prevList, newItem]
      })
    }
  }

  function deleteItem(id) {
    setList(prevList =>  prevList.filter(item => item.id !== id))
  }
  function completeItem(id) {
    console.log("Hi complte calling", id);
    setList(prevList => {
      const newList = prevList.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed : !item.completed,
            active : !item.active
          }
        } else {
          return item
        }
      })
      return newList;

    })

  }
  function clearAll() {
    setList([]);
    localStorage.clear();
  }


  return (

    <div className='app'>
      <h1>#todo</h1>
      <div className='container'>
        <todoContext.Provider value={{todoList : list, setList : setList, tabs: tabs, setTabs: setTabs,addItem: addItem, deleteItem: deleteItem, completeItem: completeItem, clearAll: clearAll}}>

          <Tabs />
          {
            tabs === "All" && <AllTab />
          }
          {
            tabs === "Active" && <ActiveTab />
          }
          {
            tabs === "Completed" && <CompletedTab tabs={tabs} />
          }

        </todoContext.Provider>
      </div>
    </div>
  )
}

export default App