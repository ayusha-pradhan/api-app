import React from 'react';
import CheckBox from './CheckBox';

export default class Todo extends React.Component{

 render(){
        const {persons}=this.props
        return(
            
                 <div className="checkbox-list">
                    {persons.map((person,index) =>
                    {return(
                    <CheckBox filterSelected={()=> this.props.filterSelected(person.username)} 
                    // checkSelect={()=> this.props.checkSelect()}
                    key={index} 
                    persons={person.username}
                    />
                    )
                    }
                    )}
                </div>
            );
               
        }

//     filterSelected = (persons)=>{
//     this.props.filterSelected(persons);
// }   
}
