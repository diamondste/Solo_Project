const mongoose = require("mongoose");
const User = require("./user.model")

const MovieSchema = new mongoose.Schema({

    title: {
        type: String ,
        required: [true, "Title is required!"]
    },

    type: {
        type: String,
        required: [true, "Type is required!"],
        enum: [
            "Movie",
            "Tv Show"
        ]

    },

    genre: { 
        type: String,
        required: [true, "Genre is required!"],
        enum: [
            "Action",
            "Animation",
            "Comedy",
            "Crime",
            "Drama",
            "Fantasy",
            "Historical",
            "Experimental",
            "Horror",
            "Romance",
            "Science Fiction",
            "Thriller",
            "Western",
            "Other"
        ]
    },

    year: {
        type: Number,
        required: [true, "Year is required!"]
    },

    image:{
        type: String,
        required: [true, "Image is required! Please add one!"],
    },

    summary: {
        type: String,
        required: [true, "Summary is required!"]
    },

    rating: {
        type: Number, 
        min: [0, 'Needs to be more than 0!'],
        max: [10, 'No more than 10!']
    },

    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    createdByUserName:{
        type: String
    }


}, {timestamps:true})

const Movie = mongoose.model("Movie" , MovieSchema)

module.exports = Movie;