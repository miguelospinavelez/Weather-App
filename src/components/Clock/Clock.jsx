import React from 'react';
import "./Clock.css"

export default class Reloj extends React.Component{

    constructor(props){
        super(props)
        this.state = { date: new Date() };
    }

    componentDidMount(){
        this.id = setInterval(()=>{
            this.setState({date: new Date()});
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.id);
    }

    render() {
        return(
            <footer className='reloj'>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
            </footer>
        )
    }
}