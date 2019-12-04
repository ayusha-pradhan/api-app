import React from 'react';
import './App.css';
import axios from 'axios';
// import PostForm from './PostForm';
import Selected from './Selected';
import PersonInput from './personInput';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        persons : [],
        name :''

    }
    
} 


componentDidMount() {
  
//   const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
//  const persons = response.data
//  this.setState({persons: persons})
      
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(res => {
            console.log(res);
            this.setState({
              persons:res.data
            });
          })
         
          
      }
      toggleTodo = (id) => {
          // debugger;
         this.setState({
           persons:this.state.persons.filter((person)=>person.id === id )})
           console.log(this.state.persons)
      }

      filterSelected = (id) => {
        const persons=this.state.persons.filter(person => person.id === id)
        this.setState(
          {persons:persons}
        )
      }

      updateTodo = (id) => {
        debugger;
         const persons = this.state.persons.map((a) =>
        {
             if (a.id === id){
                 return{
                     ...a,
                     username: a.username          
                 }
                }
             else{
                 return a;
             }
         }
        );
        
         this.setState({persons:persons})
         console.log(persons)
        }
  
  render(){
        const {persons,name} = this.state;
      return (
        <React.Fragment>
            <h2>Random User</h2>
            {/* <PostForm persons={persons} username={username}/> */}
            <PersonInput persons={persons}name={name}/>
      <div >
      {persons.map(person=><div key={person.id} onClick={() => this.filterSelected(person.id) }>{person.username}</div>)}
       
      </div>
      <br/>
     <div>
     <Selected persons= {persons} />
       {/* {this.state.persons.map(person =>{
       return <Selected persons= {()=>this.filterSelected(person.id)} />}
       )} */}
       </div>
      </React.Fragment>
      );
    }
  }

export default App;
