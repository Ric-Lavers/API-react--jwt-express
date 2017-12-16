const mongoose =  require('./base');

const Schema = mongoose.Schema;
const ObjectId =  Schema.Types.ObjectId;

const person = {
    type: ObjectId, ref: 'Person'
}

const comment = {
  type: ObjectId, ref: 'Comment'
}


const movieSchema = mongoose.model.Movie ||mongoose.Schema({
    title: String,
    year: Number,
    star: String,
    comments:  comment,
    director: person// ,links documents
    // cast:[actor: person],
    // crew:[{person: person, role: String]
});



const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
