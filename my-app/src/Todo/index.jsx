import React from 'react'
import Form from'./Form'
import List from './List'


const Todo = () => {

  const [ListArr,setListArr]=React.useState([])
  
  return (
    <div className='MainTodo'>
      <div className="container">
      <Form setTodos={setListArr}/>
      <List todos={ListArr} setListArr={setListArr} />
      </div>
    </div>
  )
}

export default Todo
