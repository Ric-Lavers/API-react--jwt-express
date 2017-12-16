import React from 'react';
import Movie from './Movie'
import MovieUpdate from './MovieUpdate'
import MovieComment from './MovieComment'
import MovieDelete from './MovieDelete'

export default function MoviesList({ movies, onDelete, onSubmit}){
  return(
    <div>
        <h1>Movie List </h1>
        {
            movies.map( (movie) => (
              <div>
                <Movie key={movie._id} {...movie} movie={movie} onSubmit={onSubmit}/>
                <MovieComment movieID={movie._id} />
                <MovieDelete movieID={movie._id} title={movie.title}  onSubmit={onDelete} />
                <br/><br/>
              </div>
            )   )
        }
    </div>
  )
}
