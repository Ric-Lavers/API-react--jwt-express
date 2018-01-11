export function save(movie) {
  return fetch('/movies',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie)
    })
    .then(res => res.json())
    .catch(error => {console.log(error) })
};

export function logIn(user) {
  var jwt = window.localStorage.getItem('jwt');
  if (!jwt) { console.log('Redirect to register page'); jwt = "nothing" }

  return fetch('/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    },
    body: JSON.stringify(user)
  })
  .then(res => { return res.json(); })
  .then(data => {
    console.log(data);
    // Set jwt again since may extend expiry
    window.localStorage.setItem('jwt', data.token);
    console.log('Logged in :', data);

  })
  .catch(error => {console.log(error) })
};

export function register(user) {
  return fetch('/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
  .then(res => { return res.json(); })
  .then(data => {
    window.localStorage.setItem('jwt', data.token);
    console.log(data);
  })
  .catch(error => {console.log(error) })
};
