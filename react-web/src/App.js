import React, { Component } from 'react';
import './App.css';
import MovieForm from './components/MovieForm'
import MoviesList from './components/MovieList'
import MoviesPage from './pages/MoviesPage'
import LogIn from './components/LogIn'
import * as moviesAPI from './api/moviesAPI'
import LogInForm from './auth/LogInForm.js'
import * as userAPI from './api/userAPI'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {
    state = { movies: [] }

  componentDidMount(){
      moviesAPI.all()
      // .then(x => console.log(x))
      .then(movies => {
        this.setState( movies )
      })
  }

  clean = (movie) => {
    for (var propName in movie) {
      if (movie[propName] === "" || movie[propName] === null ) {
        delete movie[propName]
      }
    }
    // if (Object.keys(movie.director).length === 0) {
    //   delete movie.director
    // }
      return movie

  }
  updateMovie = (movie) => {
    console.log(movie);
    this.clean(movie);
    this.clean(movie.director);
    if (Object.keys(movie.director).length === 0) {
       delete movie.director
    };
    moviesAPI.update(movie);

  }

  handleNewMovie = (movie) => {
    if (movie.currentMovie) {
      this.updateMovie(movie)
    }else{
      this.setState(({movies}) => (
         {movies: [ movie ].concat(movies) }
      ));
      moviesAPI.save(movie)
    }
  }

  handleDelete = ({movieID, title}) => {
    console.log("movieID",movieID);
    console.log("this.state",this.state);
    const movies = this.state;
    movies.movies.find(function (v,i) {
      if(v !== undefined && v._id === movieID) {
        delete movies.movies[i]
      }
    });
    this.setState(movies);
    moviesAPI.del(movieID, title)
  };

  handleRegistration =(user) =>{
    userAPI.register(user);
    // userAPI.logIn(user)
  }

  handleSignIn = (user) =>{
    userAPI.logIn(user)
            //   , function (err, JST_token) {
            //   return window.localStorage.setItem( 'token', JST_token )
            // })
    // window.localStorage.setItem( 'token', JWT_token )
    // window.localStorage.getItem( 'token')
    // window.localStorage.removeItem()
  }

  jwtPresent = () =>{
    if (!window.localStorage.getItem('jwt'))
     { return "No JWT"}
  }

  render() {
    const loggedIn = this.jwtPresent();

    const {movies} = this.state;
    return (
      <Router>
        <div className="App">
            {loggedIn && <LogInForm onSubmit={this.handleRegistration} />}
            <LogIn onSubmit={this.handleSignIn} />

            <MovieForm onSubmit={this.handleNewMovie} />

          
          {movies?(
                  <MoviesList onSubmit={this.handleNewMovie} movies={ movies } onDelete={this.handleDelete}/>
              ):(
                  "Loading..."
              )}

        </div>
      </Router>
    );
  }
}

export default App;
