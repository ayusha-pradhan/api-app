import React from 'react';
import './App.css';
import axios from 'axios';
import Todo from './components/Todo';
import Selected from './components/Selected';
import PersonInput from './components/PersonInput';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      persons : [],
        select:[],
        currentItem:{username :'',email:''},
        // username :'',
        // email:''
        display:false
        

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



    onClose=()=>{
        this.setState({display:false})
    }

    showForm=()=>{
      this.setState({display:true})
  }

      filterSelected = (username) => {
        // debugger;
               const person=this.state.persons.filter(person => person.username === username)
        const newPerson=this.state.select.concat(person)
        this.setState(
          {persons:this.state.persons,select:newPerson}
        )
        console.log(this.state.persons)
        console.log(newPerson)
        
        
      }
      



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
      <> 
        
        <h1 style={{textAlign:"center"}}>Student</h1> 
          
          <button  onClick={()=>this.showForm()}>Add Student</button>
          
          <div>
          { this.state.display===true ?
          <PersonInput handleChange={this.handleChange} 
            // handleEmailChange={this.handleEmailChange}
            // handleUsernameChange={this.handleUsernameChange}
            onClose={this.onClose}
            handleSubmit={this.handleSubmit} 
            username={currentItem.username} 
            email={currentItem.email}
            // username={this.state.username} 
            // email={this.state.email}
          />
          :null
          }
        </div>
       
        <div className='container'>
  
          <div className='student'><h2 style={{textAlign:'center'}}>Students</h2>
              <Todo 
                persons={persons}
                filterSelected={this.filterSelected}
                //  checkSelect={this.checkSelect}
              />
          </div>
          <div className='present'><h2 style={{textAlign:'center'}}>Present</h2>
               <Selected select= {select}   />
          </div>
          </div>
         
      </>
      );
    }
  }

export default App;


