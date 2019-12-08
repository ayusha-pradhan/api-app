import React from "react";

export default class Selected extends React.Component{

    
render(){
    
    const {select}=this.props;
    return(
        
        select.map((person)=>{
        // debugger
            return(
                (person.username)?
                    <div key={person.id}>
                        Username:{person.username}
                        {/* Email:{person.email} */}
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
