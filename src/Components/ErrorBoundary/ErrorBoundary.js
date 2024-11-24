import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {hasError: false};
    }
    static getDerivedStateFromError(error){
        return { hasError: true }; 
    }
    componentDidCatch(error, info) {
        console.error("Error caught by Error Boundary", error, info)
    }
    render(){
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Oops! Something went wrong.</h1>
                    <p>{this.state.errorMessage}</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;