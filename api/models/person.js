const mongoose =  require('./base');

const PersonSchema = mongoose.Schema({
    firstName: String,
    lastName: String
});

PersonSchema.methods.fullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const Person = mongoose.model.Person ||mongoose.model('Person', PersonSchema);

module.exports = Person;
