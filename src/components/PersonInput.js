import React from 'react';
import '/home/evolve/api-app/src/App.css';
// import axios from 'axios';

export default class PersonInput extends React.Component {

  render() {
    const{handleChange,handleUsernameChange,handleEmailChange,onClose,handleSubmit,username,email}=this.props
    return (
      <div className='bg-modal'>
        <div className='modal-content'>
        <form className='input-fields' onSubmit={handleSubmit}>
          
           <input type="text" className='textbox' placeholder="Student Name" name="username" value={username}
            //  onChange={handleUsernameChange}
             onChange={handleChange}
             />
           
           <input type="text" className='textbox' placeholder="Email" name="email" value={email}
            //  onChange={handleEmailChange}
            onChange={handleChange}
              />
         
          <button className='btn' type="submit">Add</button>
          <button className='btn1' onClick={onClose}>Close</button>
        </form>
        </div>
      </div>
    )
  }
}