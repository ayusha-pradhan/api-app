import React from "react";

export default class Selected extends React.Component{

    
render(){

    const {persons}=this.props;
    return(
        
        <div>
            {/* {persons.username} */}
            {persons.map((person) =>
            
           {
                return(
               
                <div>
                    {person.username}
                </div>
                               
            
                )}
                )}
        </div>

    )
}

}