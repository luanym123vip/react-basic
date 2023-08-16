import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";
import { connect } from "react-redux";
class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history('/todo');
    //     }, 3000);
    // }

    handleDeleteUser = (user) => {

        console.log('user: ', user)
        this.props.deleteUser(user)
    }
    handleAddnewUser = () => {
        this.props.addUserRedux()
        console.log("props", this.props.dataRedux)
    }

    render() {

        //console.log('check props: >>>', this.props)
        let listUsers = this.props.dataRedux
        return (
            <>
                <div> Hello lại là Diên đây </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <span onClick={() => this.handleDeleteUser(item)}> {index + 1} - {item.name}  X</span>
                                </div>
                            )
                        })

                    }
                    <button type="button" onClick={() => this.handleAddnewUser()}> New User</button>
                </div>

            </>

        )
    }
}
const mapStatetoProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'ADD_USER' })
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Color(Home));