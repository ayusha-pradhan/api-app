import React from 'react';


export default class CheckBox extends React.Component{
  
render(){
    const {persons}= this.props;
    
    return (
                 <div >
                    <label>
                        
                    <input
                        type="checkbox"
                        persons={persons}
                        checked={persons.username}
                        onChange={()=>this.filterSelected(persons.username)}
                    />
                    {persons}
                    </label>               
                </div>
            );
}
filterSelected = (persons)=>{
this.props.filterSelected(persons);

}
}
