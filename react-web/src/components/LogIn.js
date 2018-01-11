import React from 'react';

export default function LogIn({onSubmit}) {

  const handleSubmit = (event) =>{
    event.preventDefault()
    const {elements} = event.target;
    const email= elements["email"].value
    const password= elements["password"].value
    onSubmit({email, password})

  }
  return(
    <form onSubmit = {handleSubmit} className='log-in'>
      <label>Email<input type='text' name='email'></input></label>
      <label>password<input type='text' name='password'></input></label>
      <button type="submit"> Log In </button>
    </form>
  )
};
