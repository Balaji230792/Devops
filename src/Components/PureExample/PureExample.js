
import React from "react";
class PureExample extends React.PureComponent{
    constructor(props){
        super(props);
        this.State = {
            count: 0
        };
    }
    increment = () => {
        this.setState({count: this.State.count + 1});
    };
    render(){
       return (
        <div>
            <div>
                <p>Parent State Count: {this.props.value}</p>
            </div>
            <div>
                <p>Own State Count: {this.State.count}</p>
                <button onClick={() => {this.setState({count: this.State.count + 1} )}}>Increment</button>
            </div>
        </div>
       ); 
    }
}

export default PureExample;