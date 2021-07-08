const mongoose = require('mongoose')
const jobModel = require(__dirname + '/jobModel')

const  jobSchema = jobModel.jobSchema

const Schema =  mongoose.Schema

const PEOPLE_SCHEMA =
    {
        name: {
            type: String,
            required: [true]
        },
        age: {
            type: Number,
            min: 0,
            max: [100, "Max age is 100, got {VALUE}"]
        },
        Sex: String,
        job: jobSchema,
    };
const peopleSchema = new Schema(PEOPLE_SCHEMA);


exports.getPeopleModel = new mongoose.model("people", peopleSchema);