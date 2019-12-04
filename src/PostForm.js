import React from 'react';
import axios from 'axios';

class PostForm extends React.Component{
    // constructor(props){
    //     super(props)

    //     this.state ={
            
    //         username :''
    //     }
    // }

    changeHandler = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    // async addTodo() {
        
    //     const itemToAdd = this.state.username
    //     const {data} = await axios.post(`https://jsonplaceholder.typicode.com/users`, itemToAdd)
    //     const currentState = this.state.persons
    //     this.setState({
    //       persons: currentState.concat(data),
             
    //       username: ''
             
    //      })
    //    }

   submitHandler = (e)=>{
        e.preventDefault();
        axios.post(`https://jsonplaceholder.typicode.com/users`,this.props.username)
        
            
        .then(res=>{
                console.log(res);
                this.props.persons.push(res.data);
                this.setState({username: this.props.username});
                
            })
    }

    render(){
        const{username} = this.props
        return(
            <div>
            <form onSubmit={this.submitHandler}>
                <input 
                    type="text" 
                    name="username" 
                    value={username}
                    onChange={this.changeHandler}/>
                <button type="submit">Add</button>
            </form>
            </div>
            
        )
    }
}

export default PostForm;