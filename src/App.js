import React from 'react';
import './App.css';
import axios from 'axios';
// import Todo from './components/Todo';
import Todo from './todo';
// import PostForm from './PostForm';
import Selected from './Selected';
import PersonInput from './personInput';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      persons : [],
        select:[],
        currentItem:{username :'',email:''}
        

    }
    
} 

componentDidMount() {
  
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(res => {
            console.log(res);
            this.setState({
              persons:res.data
            });
          })
      }

      

      filterSelected = (username) => {
        // debugger;
        const person=this.state.persons.filter(person => person.username === username)
        // const person=this.state.persons.forEach(person=>{this.state.select.push(person.username);});
        const newPerson=this.state.select.concat(person)
        this.setState(
          {persons:this.state.persons,select:newPerson}
        )
        console.log(this.state.persons)
        console.log(newPerson)
        
        
      }
      
     
      // filterSelected = (username) => {
      //   // debugger;
      //   const person=this.state.persons.map((person) => {          
      //     if(person.username === username){
      //       return person;
      //     }
      //     else{
      //       return person;
      //     }
      //   })
      //   this.setState(
      //      {persons:this.state.persons,select:person
      //     }
      //   )
      //   // console.log(persons)
        
      //   console.log(this.state.select)
      // }

      handleChange = event => {
        const currentItem = {[event.target.name]:event.target.value}
        this.setState({ currentItem});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        const newItem = this.state.currentItem
        if(newItem !==''){
          const persons =[...this.state.persons,newItem]
          this.setState({
            persons:persons,
            
          })
        }
        console.log(this.state.persons)
      }
      
  
  render(){
        const {persons,select,currentItem} = this.state;
      return (
        <React.Fragment>
        <PersonInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} username={currentItem.username} email={currentItem.email}/>
        <h2>Todos</h2>
         <Todo 
         persons={persons}
         filterSelected={this.filterSelected}/>  
     
        <br/>
        <div>
        <h2>Done</h2>
        <Selected select= {select}   />
        </div>
      </React.Fragment>
      );
    }
  }

export default App;


