import React ,{Component} from "react";

class ErrorBoundary extends Component{

    constructor(props){
        super(props)
        this.state={
            hasError: false
        }
    }
    componentDidCatch(){
        this.setState({
            hasError:true
        })
    }
    render(){
        if(this.state.hasError){
            return(
                <h1>Sorry ,Something is wrong</h1>
            )
        }

        else{
            return this.props.children
        }
        
    }

}

export default ErrorBoundary