const mongoose = require('mongoose')
const dbOps = require('../db_ops/dbOps');
const mencrypt = require('mongoose-encryption');

const Schema =  mongoose.Schema

const USER_SCHEMA =
    {
        name: {
            type: String,
            required: [true, "Enter a unique user name"],
            validate: {
                validator: async function(name) {
                    const user = await this.constructor.findOne({ name });
                    if(user) {
                        if(this.id === user.id) {
                            return true;
                        }
                        return false;
                    }
                    return true;
                },
                message: props => 'The specified user name is already in use.'
            },
        },
        email: {
            type: String,
            required: [true]
        },
        password: {
            type: String,
            required: [true]
        }
    };
const userSchema = new Schema(USER_SCHEMA);
userSchema.plugin(mencrypt, { secret: dbOps.secret, encryptedFields: ['password'] })

const userModel = new mongoose.model("user", userSchema);


exports.userSchema = userSchema
exports.getuserModel = userModel;

exports.addUser = async (username, email, password) => {
    let findUserExistsCondition = {name: username}
    let userExists = await dbOps.findOne(userModel, findUserExistsCondition)
    if( userExists){
        throw new Error(`user with name ${username} already exists.Try a different username` )
    }
    else{
        let newUser = new userModel({name: username, email: email, password: password});
        try{
            await dbOps.saveObject(newUser)
        } catch (e) {
            console.log("Error saving user" + e)
            throw e;
        }
    }
}

exports.validateUser = async (username, password) => {
    let findUserExistsCondition = {name: username}
    let userExists = await dbOps.findOne(userModel, findUserExistsCondition)
    if(! userExists){
        throw new Error(`user with name ${username} and password doesn't exists.` )
    }
    else {
        if(userExists.password === password){
            return true
        }else{
            return false
        }
    }

}