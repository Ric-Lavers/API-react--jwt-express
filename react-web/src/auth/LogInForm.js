import React from 'react';

export default function LogInForm({onSubmit}){

  const handleSubmit = (event) => {
    event.preventDefault();
    const {elements} = event.target;
    const firstName= elements["firstName"].value
    const lastName= elements["lastName"].value
    const email= elements["email"].value
    const password= elements["password"].value
    onSubmit({firstName, lastName, email, password})
  };


  return(
    <form onSubmit= {handleSubmit} className='log-in-form'>
      <label>First Name<input type='text' name='firstName'></input></label>
      <label>Last Name<input type='text' name='lastName'></input></label>
      <label>Email<input type='text' name='email'></input></label>
      <label>password<input type='text' name='password'></input></label>
      <button type="submit"> Register </button>
    </form>
  )
};
