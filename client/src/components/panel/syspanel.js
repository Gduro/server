import React from "react";
import StartFirebase from "../../containers/firebaseConfig";
import { get } from "firebase/database";


class SysPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            db:'',
            username:'',
        }

    }
    componentDidMount(){
        this.setState({
            db: StartFirebase()
        });
    }
    render(){
        return(
            <>
                <h1>{this.state.username}</h1>
            </>
        )
    }
}