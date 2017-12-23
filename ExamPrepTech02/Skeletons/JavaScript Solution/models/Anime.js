const mongoose = require('mongoose');

let animeSchema = mongoose.Schema({

    rating: {type: 'number', require:'true'},
    name: {type: 'string', require:'true'},
    description: {type: 'string', require:'true'},
    watched: {type: 'string', require:'true'},

});


let Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;