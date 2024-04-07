import { todo } from "../Test-transition/AboutTab";
import TodoItem from "./TodoItem";

interface TodoListProps{
    todos:Array<todo>;
    deleteTodo:(id:number)=>void;
    ToggleTodo:(id:number)=>void;
}
export default function TodoList({todos,deleteTodo,ToggleTodo}:TodoListProps) {
  return (
    <ul>
        {
            todos.map(todo=>(
                <TodoItem key={todo.id} todo={todo} ToggleTodo={ToggleTodo} deleteTodo={deleteTodo}/>
            ))
        }
    </ul>
  )
}
