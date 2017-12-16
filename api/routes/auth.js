const express = require('express');
const authMiddleware = require('../middleware/auth.js');

const router =  new express.Router();

// Register new user
router.post('/register',
// first regester
  authMiddleware.register,
  authMiddleware.signJWTForUser

// WE DONT NEED BELOW THANKS TO 'signJWTForUser'
// // this returnes user details.
//   (req,res,next) => {
// // provide the response
//     res.json({user: req.user})
//   }
);

// Sign in user
router.post('/signin', function (req,res) {
  authMiddleware.signIn,
  authMiddleware.signJWTForUser

  // middleware that allows us to sign in
  // authMiddleware.signIn,

})


module.exports =  router;
