import React from "react";
import '/home/evolve/api-app/src/App.css';

export default class Selected extends React.Component{

    
render(){
    
    const {select}=this.props;
    return(
        
        select.map((person)=>{
        // debugger
            return(
                (person.username)?
                    <div key={person.id}>
                       <div className='user-name'> {person.username}</div>
                       <div className='email'> {person.email}</div>
                    </div>
                
                :
                <></>
                
            )
            
        })
    )
}
}

//     const {persons}=this.props;
//     return(
//         persons.map((person)=>{
//         return(
//             if(person.id===id){
//                 return(<div>{person.username}</div>)
//              }
//              else{
//                  return <div></div>
//              }
//         ))
    
        
               
        

//     )}
