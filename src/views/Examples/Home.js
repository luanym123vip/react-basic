import React from "react";
import { useNavigate } from "react-router-dom";

class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history('/todo');
        }, 3000);
    }


    render() {

        return (
            <>
                <div> Hello lại là Diên đây </div>

            </>

        )
    }
}
export default Home(props) => (
    <Home history={useNavigate()} />
);