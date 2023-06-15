import React from "react";
class ChildComponents extends React.Component {

    // state = {
    //     firstName: '',
    //     lastName: '',
    // }
    // thế state là gì ?
    // ví dụ như máy tính thì state như là 1 memory nó lưu giữ các biến
    // cập nhật data liên tục cho components mà không cần phải tải lại trang

    // handleChangeFirstName = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleChangeLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault() // hàm này giúp không load lại trang khi submit
    //     console.log('>>> data:', this.state)
    // }
    render() {
        // let name = this.props.name;
        // let age = this.props.age;

        // cách viết tắt và bắt buộc tên biến phải giống tên biến cha truyền xuống
        let { fname, lname, jobArr } = this.props;
        console.log('check props: ', this.props)
        return (
            <>

                {/* <form>
                    <label htmlFor="fname" >First name:</label> <br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)}></input><br />
                    <label htmlFor="lname" >Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} ></input> <br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}></input>
                </form> */}
                <div className="job-lists">
                    {/* cách gọi array */}
                    {
                        jobArr.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index} - {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>

        )
    }
}
export default ChildComponents;