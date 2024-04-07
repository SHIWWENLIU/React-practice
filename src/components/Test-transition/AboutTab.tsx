import { useState } from "react";
import AddTodo from "../ui/AddTodo";
import TodoFilter from "../ui/TodoFilter";
import TodoList from "../ui/TodoList";
export interface todo{
  id:number;
  text:string;
  done:boolean;
}
const AboutTab = () => {

  const [todos, setTodos] = useState<todo[]>([]);
  const [filter, setFilter] = useState('all')

  const addTodo = (text:string)=>{
    const newTodo = {
      id:Date.now(),
      text,
      done:false
    }
    setTodos([...todos,newTodo])
  }

  const deleteTodo = (id:number)=>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const ToggleTodo = (id:number)=>{
    setTodos(todos.map(todo=>{
      if(todo.id == id){
        todo.done = !todo.done
      }
      return todo
    }))
  }

  const getFilteredList = ()=>{
    switch(filter){
      case 'all':
        return todos;
      case 'completed':
        return todos.filter(todo => todo.done)
      case 'active':
        return todos.filter(todo=>!todo.done)
      default:
        return todos;
    }
  }

    return (
      <div>
      <h3>To Do List</h3>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={getFilteredList()} deleteTodo={deleteTodo} ToggleTodo={ToggleTodo}/>
      <TodoFilter setFilter={setFilter}/>
    </div>
    )
    
  };
  
  export default AboutTab;