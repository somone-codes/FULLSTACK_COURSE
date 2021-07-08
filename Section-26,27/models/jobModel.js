const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const JOB_SCHEMA =
    {
        name: {
            type: String,
            required: [true]
        },
        location: String
    };
const jobSchema = new Schema(JOB_SCHEMA);

exports.jobSchema = jobSchema
exports.getJobModel = new mongoose.model("job", jobSchema);