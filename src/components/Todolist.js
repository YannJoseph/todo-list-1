import React, {useState} from 'react'


function Todolist() {

    const [todoInputText, setTodoInputText] = useState("")
    const [todos, setTodos] = useState([
       {
            todo: "Making a video",
            complete: true
        },
        {
            todo: "Making a website",
            complete: true
        },
        {
            todo: "Making a video 2",
            complete: false
        }
    ])

    function handleAddTodo(){
        if (todoInputText.length > 0){
            setTodos([...todos, {todo:todoInputText, complete:false}])
        }
    }

    function handleTodoClick(e, index){
        switch(e.detail){
            case 1:
               const newArr = []
            
               todos.map((item, i) => {
                   if(i === index) {
                       newArr.push({
                           todo: item.todo,
                            complete: !item.complete
                       })
                   }else{
                       newArr.push(item)
                   }
               })
               setTodos(newArr)
               break;
            case 2:
                setTodos(todos.filter((item,iy) => iy !==index))
                break

            default:
            break;    
        }
    }
  return (
    <div class='todo-container  '>
        <div className='regles-container'>
        <h2>Regles:</h2>
        <h4>1 clique pour terminer</h4>
        <h4>2 cliques pour supprimer</h4>
        </div>
        <input onChange={ e => setTodoInputText(e.target.value) } className='input-todo-text' type="text" placeholder='enter the task' ></input>
        <button onClick={() => handleAddTodo()} className='add-todo-button' > add task</button>

        <div className='display-todo-container'> 
        {todos.map((todo,index) => (
            <h3 style={{textDecoration: todo.complete ? "line-through" : 'none', background: todo.complete ? 'red' : null }} onClick={e => handleTodoClick (e,index)} className='todo-item-text' >{todo.todo}</h3>
        ))} 

        </div>
    </div> 
  )
}

export default Todolist 