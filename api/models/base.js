const mongoose = require('mongoose');
mongoose.Promise = Promise;
const db = mongoose.connection;
// above is the standard start so copy and paste it in the future

db.on('open', () => { console.log('successfully connected to MongoDB')});
mongoose.connect('mongodb://localhost/movies', {useMongoClient:true}); //default exports


module.exports =  mongoose;
