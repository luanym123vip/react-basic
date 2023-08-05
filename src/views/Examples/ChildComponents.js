import React from "react";
import "./Demo.scss";
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

    // định nghĩa state cho nút Show và Hide
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDelete = (job) => {
        this.props.deleteJob(job);
    }
    render() {
        // let name = this.props.name;
        // let age = this.props.age;

        // cách viết tắt và bắt buộc tên biến phải giống tên biến cha truyền xuống
        let { jobArr } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        console.log('check : ', check)
        return (
            <>

                {/* <form>
                    <label htmlFor="fname" >First name:</label> <br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)}></input><br />
                    <label htmlFor="lname" >Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} ></input> <br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}></input>
                </form> */}
                {showJobs === false ? <div><button style={{ color: 'red' }} onClick={() => this.handleShowHide()}>Show</button> </div>
                    :
                    showJobs &&
                    // câu trên có nghĩa là nếu showJobs = true thì chạy code sau dấu &&
                    //bắt buộc phải có <></> để tạo lớp giáp mô hình
                    <>
                        <div className="job-lists">
                            {/* cách gọi array */}
                            {
                                jobArr.map((item, index) => {
                                    if (+item.salary > 500) {
                                        return (

                                            <div key={item.id}>
                                                {index} - {item.title} - {item.salary}
                                                <></> <></> <span onClick={() => this.handleOnClickDelete(item)}>X</span>
                                            </div>



                                        )
                                    }

                                })

                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>

        )
    }
}
export default ChildComponents;