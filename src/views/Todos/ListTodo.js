import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import EditTodo from "./EditTodo";
class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Code React' },
            { id: 'todo3', title: 'Learn Germany' },


        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
            // let curr = this.state.listTodos;
            // curr.push(todo);
            // lisTodos: curr

        })
        toast.success("Add Todo Successful !")
    }
    deleteTodo = (todo) => {
        let currenTodos = this.state.listTodos;
        currenTodos = currenTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currenTodos
        })
        toast.success("Delete Todo Successful !")
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id == todo.id));
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('Update Todo Successful !')

            return;

        }
        this.setState({
            editTodo: todo
        })

    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({

            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodos, editTodo } = this.state;
        //let listTodos = this.state.listTodos;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log(' >>> check isEmptyObj: ', isEmptyObj)
        return (
            <>
                <p>Simple Todo App</p>
                <div className="list-todo-container">
                    <AddTodo addNewTodo={this.addNewTodo} editTodo={this.editTodo} />
                    <div className="list-todo-content">
                        {
                            listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span> {index + 1}. {item.title}  </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnchangeEditTodo(event)} />
                                                    </span>
                                                    :
                                                    <span> {index + 1}. {item.title}  </span>
                                                }
                                            </>
                                        }
                                        <button className="edit" type="button" onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}

                                        </button>
                                        <button className="delete" type="button" onClick={() => { this.deleteTodo(item) }}>Delete</button>
                                    </div>
                                )
                            })
                        }





                    </div>
                </div>
            </>
        )
    }

}
export default ListTodo;