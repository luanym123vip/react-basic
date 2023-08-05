import React from "react";
import "./ListTodo.scss"
import { toast } from "react-toastify";
class AddTodo extends React.Component {

    state = {
        title: ''
    }
    handleChangeTitleTodo = (event) => {
        this.setState({
            title: event.target.value

        })
    }

    handleAddTodo = () => {
        if (!this.state.title) {
            // undifine/null/empty => false
            toast.error("Missing Title !")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleChangeTitleTodo(event)}
                />
                <button className="add" type="button" onClick={() => this.handleAddTodo()}>
                    Add
                </button>
            </div>
        )
    }
}
export default AddTodo;