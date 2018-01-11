import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MoviesList from '../components/MovieList'
import Movie from '../components/Movie'

export default ({movies}) => (
  movies?(
          <MoviesList onSubmit={this.handleNewMovie} movies={ movies } onDelete={this.handleDelete}/>
      ):(
          "Loading..."
      )

)
