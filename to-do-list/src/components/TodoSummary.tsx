import { Todo } from "../types/todo";
import { Trash2 } from "lucide-react";
interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({
    todos,
    deleteAllCompleted
    }: TodoSummaryProps) {

    const completedTodos = todos.filter(todo => todo.completed);
    return(
        <div className = "text-center align-middle text-gray-500 ">
           
                {completedTodos.length}/{todos.length} Completed
            
            {completedTodos.length > 0 && (
            <button
            onClick={() => deleteAllCompleted()}
            className = "text-center align-middle p-2 "
            >
                <Trash2 size = {20} className = "hover:text-red-500"/>
            </button>
            )}
            
        </div>
    )
}