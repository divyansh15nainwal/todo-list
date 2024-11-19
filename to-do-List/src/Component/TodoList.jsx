import todo_icon from '../Assets/todo_icon.png'
import TodoItem from './TodoItem';
import {useEffect, useRef, useState} from 'react'

function Todo(){
   const [todoList,settodoList]= useState(localStorage.getItem("todo")? JSON.parse(localStorage.getItem("todo")):[])

  const inputValue= useRef();
  const Add = (event)=>{
    event.preventDefault();
  
   const textValue= inputValue.current.value.trim();
   if(inputValue===" "){
    return;
   }
   const toDo={
    id:Date.now(),
    text: textValue,
    isComplete: false,

   }
   settodoList((prev)=>[...prev,toDo]);
   inputValue.current.value = "";

   
   
  }
  const deleteTodo=(id)=>{
    settodoList((prevTodo)=>{
      return prevTodo.filter((todo)=>todo.id!==id)
    })
    

  }
  const toggle =(id)=>{
    settodoList((prev)=>{
     return prev.map((todos)=>{
      if(todos.id=== id){
        return{...todos, isComplete: !todos.isComplete}
      }
      return todos
     })
    })
  }
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todoList))
    
  },[todoList])
  
  const editTodo = (id, newText) => {
     settodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      });
    });
  };

  return(
    <div className='bg-[#EAD8B1] place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl '>
    <div className=" flex">
      
      <img className='w-8 ' src={todo_icon} alt="" />
      <h1 className='font-semibold text-3xl text-cyan-900 ml-2' >To-Do List</h1>
    </div>
    <div className ='mt-8'>

    <form>
    
    <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
      
       
        <textarea ref={inputValue} id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ADD YOUR TASK..."></textarea>
            <button onClick={Add} type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
            </svg>
            
        </button>
    </div>
      </form>

    </div>
    <div>
      {todoList.map((item,index)=>{
        return <TodoItem key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} editTodo={editTodo}/>

      })}
      
      
    </div>

    </div>
  )
}
export default Todo;