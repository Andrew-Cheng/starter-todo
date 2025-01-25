import { Todo } from "../types/todo";
import { Trash2 } from "lucide-react";
interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete:(id: number) => void;
}

export default function TodoItem( {todo, onCompletedChange, onDelete}: TodoItemProps){
    return(
        <div className = "flex">
            <label className = "grow items-center gap-2 border rounded-s-md p-2 border-gray-400 bg-white hover:bg-slate-100">
                <input type = "checkbox"
                 checked = {todo.completed}
                 onChange = {(e) => onCompletedChange(todo.id, e.target.checked)}
                 className = "scale-125"/>
                <span className = {todo.completed ? "line-through text-gray-400" : ""}> {todo.title} </span>
                
            </label>
            <button 
            onClick = {() => onDelete(todo.id)} 
            className = " rounded-e-md border border-gray-400 bg-white hover:bg-slate-200 p-2"
            >
                <Trash2 size = {20} className = "text-gray-500"/>
            </button>
            
        </div>
    )
}