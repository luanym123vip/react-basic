import React from "react";
import ChildComponents from "./ChildComponents";
import AddComponents from "./AddComponent";
class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abc1', title: 'Dev', salary: '490' },
            { id: 'abc2', title: 'Test', salary: '560' },
            { id: 'abc3', title: 'Sev', salary: '550' },
            { id: 'Dieen', title: 'Cute', salary: '999' }
        ],
    }
    // thế state là gì ?
    // ví dụ như máy tính thì state như là 1 memory nó lưu giữ các biến
    // cập nhật data liên tục cho components mà không cần phải tải lại trang


    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run update: ', 'prevProps: ', prevProps, 'prevState :', prevState);
    }
    componentDidMount() {
        console.log('>>run componentDidMount')
    }
    render() {
        // console.log(this.state);
        return (
            // <> là <React.Fragment>
            <>
                <AddComponents addNewJob={this.addNewJob} />
                <div> Child Component</div>
                <ChildComponents jobArr={this.state.arrJobs} deleteJob={this.deleteJob} />

            </>

        )
    }
}
export default MyComponent;