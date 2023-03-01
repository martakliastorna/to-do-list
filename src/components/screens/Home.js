import React, { useState } from "react";
import Todoitem from "./Todoitem";
import CreateTodoField from "./CreateTodoField"

const data = [
  {
    _id: '1',
    title: 'Finish the essay collaboration',
    isCompleted: false,
  },
  {
    _id: '2',
    title: 'Read next chapter of the book',
    isCompleted: false,
  },
  {
    _id: '3',
    title: 'Send the finished essay',
    isCompleted: false,
  },
]


function Home() {
  const [todos, setTodos] = useState(data);

  const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isCompleted = !current.isCompleted 
    setTodos(copy);
}
  const removeTodo = id => {
    setTodos([...todos].filter(t => t._id !== id));
}
  
  return ( <div className={ 'text-white w-4/5 mx-auto'}>
  <h1 className="text-2xl font-bold text-center mb-8">To do list</h1>
    {todos.map(todo => (
      <Todoitem todo={todo}
        key={todo._id}
        changeTodo={changeTodo}
        removeTodo={removeTodo} />
))}
<CreateTodoField setTodos={setTodos} />
</div>)};
export default Home;