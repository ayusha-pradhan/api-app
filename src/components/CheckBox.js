import React from 'react';


export default class CheckBox extends React.Component{
  
render(){
    const {persons}= this.props;
    
    return (
                 <div >
                    <label className='checkBox'>
                        
                    <input
                        
                        type="checkbox"
                        value={persons}
                        //checked={}
                        onChange={()=>this.props.filterSelected(persons.username)}
                        // onChange={()=>this.props.checkSelect()}
                    />
                    {persons}
                    </label>               
                </div>
            );
}
// filterSelected = (persons)=>{
//     debugger;
// this.props.filterSelected(persons);

// }
}
