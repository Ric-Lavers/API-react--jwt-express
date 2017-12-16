import React from 'react'

export default function MovieDelete({onSubmit, movieID, title}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({movieID, title})
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Delete</button>
    </form>
  )
}
