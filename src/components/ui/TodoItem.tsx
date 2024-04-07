

export default function TodoItem({todo,deleteTodo,ToggleTodo}:any) {
  return (
    <li style={{textDecoration:todo.done?'line-through':''}}>
        {todo.text}
        <button onClick={()=>ToggleTodo(todo.id)}>done</button>
        <button onClick={()=>deleteTodo(todo.id)}>delete</button>
    </li>
  )
}
