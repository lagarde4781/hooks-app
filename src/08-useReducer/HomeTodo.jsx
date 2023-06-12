import { useTodos } from "../hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const HomeTodo = () => {
    const { 
        todos, 
        handleDeleteTodo, 
        handleToggleTodo, 
        handleNewTodo,
        todosCount,
        pendingCount 
    } = useTodos()

    return (
        <>
            <h1>TodoApp: { todosCount } <small>Pendientes: { pendingCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }></TodoAdd>
                </div>
            </div>
        </>
    )
}
