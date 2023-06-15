import React from "react";
class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
    }
    // thế state là gì ?
    // ví dụ như máy tính thì state như là 1 memory nó lưu giữ các biến
    // cập nhật data liên tục cho components mà không cần phải tải lại trang

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault() // hàm này giúp không load lại trang khi submit
        console.log('>>> data:', this.state)
    }
    render() {
        // console.log(this.state);
        return (
            <>
                <form>
                    <label htmlFor="fname" >First name:</label> <br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)}></input><br />
                    <label htmlFor="lname" >Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} ></input> <br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}></input>
                </form>
            </>

        )
    }
}
export default MyComponent;