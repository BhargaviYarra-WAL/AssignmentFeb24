import { useState, useEffect } from "react";
import axios from "axios";
const TodoApplication= ()=>{
    let [todo , setTodo] = useState(["DefaultTodo"])
    useEffect(()=>{
        axios.get("https://gorest.co.in/public/v2/todos").then((res)=>{
            
            setTodo(res.data)
        })
    })
    return(
        <div className="AllTodo">
            <h2>Todo List</h2>
            
                    <table className="table">
                        <tr>
                            <th>ID</th>
                            <th>USERID</th>
                            <th>TITLE</th>
                            <th>DUE</th>
                            <th>STATUS</th>
                        </tr>
                        {todo.map((val,index)=>{
                return(
                    
                        <tr>
                        <td>{val.id}</td>
                        <td>{val.user_id}</td>
                        <td>{val.title}</td>
                        <td>{val.due_on}</td>
                        <td>{val.status}</td>
                        
                         </tr>   
                )
            })}

                    </table>
                        
                        
                   
           
        </div>
    )
}

export default TodoApplication;