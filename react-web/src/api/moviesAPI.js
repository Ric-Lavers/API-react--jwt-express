const MOVIES_API_URL= `${process.env.REACT_APP_API_URL}/movies`


export function all() {
  const jwt = window.localStorage.getItem('jwt');
  if (!jwt) { console.log('Redirect to register page'); }

  return fetch(MOVIES_API_URL,{
    headers: {
      'Authorization': `Bearer ${jwt}`
    }})
    .then(res=>res.json() )
    .catch(error => {console.log(error)})
};

export function save(movie) {
  return fetch(MOVIES_API_URL,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie)
    })
    .then(res => res.json())
    .catch(error => {console.log(error) })
}

export function del(movieID, title){
  console.log(title)
  return fetch(`${MOVIES_API_URL}/${movieID}`,{
    method: 'DELETE'
  })
  .catch(error => {console.log(error)} )
};

export function update(movie) {
  console.log(movie.id);
  return fetch(`${MOVIES_API_URL}/${movie.id}`,{
    method:'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie)
  })
  .then(res => res.json())
  .catch(error => {console.log(error) })
}
