import React from "react";
import "./ListTodo.scss";
import { toast } from 'react-toastify';
class EditTodo extends React.Component {

    state = {
        title: '',
    }
    handleChangeTitleTodo = (event) => {
        this.setState({
            title: event.target.value

        })
    }
    handleEditTodo = () => {
        if (!this.state.title) {
            // undifine/null/empty => false
            toast.warning("Missing Title !")
            return;
        }
        let todo = {
            title: this.state.title,
        }
        this.setState({
            title: ''
        })
    }
    render() {
        let { todo } = this.props
        return (
            <button className="edit" type="button"

            >Edit
            </button>
        )
    }
}
export default EditTodo;