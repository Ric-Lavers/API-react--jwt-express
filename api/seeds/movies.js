const Movie = require('../models/movie');
const Person = require('../models/person');


Person.create({firstName: 'Taika', lastName: 'Waititi'})
.then(function (two) {


Movie.create([
        {
            title:"Hunt for the Wilderpeople",
            year: 2016,
            star: "Sam Neill",
            director:two._id
        },
        {
            title:"Boy",
            year: 2010,
            star: " James Rolleston",
            director:two._id
        },
        {
            title:"What We Do in the Shadows",
            year: 2014,
            star: "Jemaine Clement",
            director:two._id
        },
        {
            title:"Thor: Ragnarok",
            year: 2017,
            star: "Chris Hemsworth",
            director:two._id
        }
    ]
)
})
