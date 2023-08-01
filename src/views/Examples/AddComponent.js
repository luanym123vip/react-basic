import React from "react";

class AddComponents extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault() // hàm này giúp không load lại trang khi submit
        if (!this.state.title || !this.state.salary) {
            alert('Missing require params')
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
        })
        this.setState({
            title: '',
            salary: '',
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="fname" >Job's title:</label> <br />
                <input type="text" value={this.state.title} onChange={(event) => this.handleChangeTitleJob(event)}></input><br />
                <label htmlFor="lname" >Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} ></input> <br />
                <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}></input>
            </form>
        )
    }
}
export default AddComponents;