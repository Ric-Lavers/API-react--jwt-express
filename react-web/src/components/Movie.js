import React from 'react';
import Comment from './Comment';
import MovieForm from './MovieForm'


export default function Movie({
    title,
    year,
    star,
    director,
    comments,
    movie,
    onSubmit
}) {
    return(
        <div>
            <span> <strong>Title:</strong> {title} </span>
            <br/><span><strong> Year:</strong> {year} </span>
            <br/><span><strong> Star:</strong> {star} </span>
            <br/>
            {director && <span> <strong>Director:</strong> {director.firstName} {director.lastName}</span>}
            <br/><div> <strong>comments: </strong>
            {
              comments &&  comments.map( comment => (
                    <Comment
                    key={comment._id}>
                        <li>{comment.body}</li>
                    </Comment>
                    ))
            }
                </div>
            <MovieForm current= {movie} onSubmit={onSubmit}/>
        </div>
    )
}
