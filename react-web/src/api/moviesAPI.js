export function all() {
  const jwt = window.localStorage.getItem('jwt');
  if (!jwt) { console.log('Redirect to register page'); }

  return fetch('/movies',{
    headers: {
      'Authorization': `Bearer ${jwt}`
    }})
    .then(res=>res.json() )
    .catch(error => {console.log(error)})
};

export function save(movie) {
  return fetch('/movies',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie)
    })
    .then(res => res.json())
    .catch(error => {console.log(error) })
}

export function del(movieID, title){
  console.log(title)
  return fetch(`/movies/${movieID}`,{
    method: 'DELETE'
  })
  .catch(error => {console.log(error)} )
};

export function update(movie) {
  console.log(movie.id);
  return fetch(`/movies/${movie.id}`,{
    method:'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie)
  })
  .then(res => res.json())
  .catch(error => {console.log(error) })
}
