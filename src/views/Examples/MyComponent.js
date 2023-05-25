import React from "react";
class MyComponent extends React.Component {

    state = {
        name: "Diên",
        channel: "Diên cute",
    }


    render() {
        return (
            <div>
                <div>hello components, My name is {this.state.name}</div>
                <div>hello components, My name is {this.state.channel}</div>
            </div>
        )
    }
}
export default MyComponent;