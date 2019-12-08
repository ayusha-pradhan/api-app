import React from 'react';


export default class Todo extends React.Component{

 render(){
        const {persons}=this.props
        return(
             <div>
                {persons.map(person=><div key={person.id} onClick={() => this.filterSelected(person.id) }>Username:{person.username},Email:{person.email}</div>)}
                
            </div>
            );
               
        }

    filterSelected = (persons)=>{
    this.props.filterSelected(persons);
}   
}
