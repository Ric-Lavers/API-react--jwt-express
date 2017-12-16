const express = require('express');
const Movie = require('../models/movie.js')
const Comment = require('../models/comment.js')
const Person =  require('../models/person')
const CountLog =  require('../models/countLog')
var colors = require('colors');
const JWT = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth');

const router = express.Router()


const authorize = (req,res,next)=> {
  console.log(req.headers);
  if ( req.header.authorization ) {
    JWT.verify(req.header.authorization, 'topsecret', function(err, decoded) {
    if (err) {
        err = {
          name: 'JsonWebTokenError',
          message: 'jwt malformed'
        }
      }
    });
    next()
  }else{
    res.status(403).end();
  }
}

const logger = (req, res, next) => {
    CountLog.find()
    next();
}

router.get('/',authMiddleware.requireJWT,(req,res) => {
    Movie.find()las
    .populate('director')
    // .populate('crew.person')
    .then(movies => {
        // console.log(`movies are: ${movies}`)
        res.json({ movies });
    })
    .catch(error => res.json({error}))
})

;

router.post('/', (req,res)=> {
    Person.create(req.body.director,function (err, director) {
      req.body.director = director._id
      // const id = director._id
      Movie.create(req.body)
      .then(movies => {
          res.status(201).json( movies ).end();
      })
    })
})

router.get('/:movieId', (req,res) => {
  Movie.findById(req.params.movieId)
  .then(movie => {
      res.json({ movie });
  })
  .catch(error => res.json({error}))
});

router.put('/:movieId', (req,res) => {
  Movie.findOneAndUpdate( {_id: req.params.movieId} ,
  req.body, { new:true })
  .then(movie => {
    console.log("then");
    res.json(movie)
  })
  .catch(error => {console.log("catch",error);res.json(error)})
});
router.delete('/:movieId', (req,res) => {
  Movie.remove({_id: req.params.movieId})
  .then(movie => {
    res.json({message: `successfully deleted movie with id:${req.params.movieId}`})
  })
  .catch(error => res.json(error))
});



module.exports = router;
