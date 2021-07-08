const mongoose = require('mongoose')

let connection = undefined;
async function connect(connectionString){
    if(! connection){
        try{
            console.log("connecting to mongodb")
            await mongoose.connect(connectionString, {authSource: "admin", useUnifiedTopology: true,
                useNewUrlParser: true})
            console.log("connected to mongodb")
            connection = mongoose.connection;
            return connection;
        } catch (e) {
            console.log("Error connecting to mongodb." + e)
            return
        }
    }
    return connection;
}

async function insert(Model, dataArray){
    try{
        console.log("Inserting object(s)")
        await Model.insertMany(dataArray)
        console.log("Inserting object(s) successfully")
    }catch (e) {
        console.log("Error during Inserting Object(s) to DB " + e)
    }
}

async function saveObject(object){
    try{
        console.log("Saving object")
        await object.save()
        console.log("Saved object successfully")
    }catch (e) {
        console.log("Error during saving Object in DB" + e)
    }
}
async function fetchData(model){
    try{
        console.log("Fetching object")
        let data;
        data = await model.find()
        console.log("Fetch object successfully")
        return data
    }catch (e) {
        console.log("Error during Fetch Object in DB" + e)
    }
}

async function updateOne(model, conditions, document){
    try{
        console.log("Updating object")
        await model.updateOne(conditions, document)
        console.log("Updated object successfully")
    }catch (e) {
        console.log("Error during Updating Object(s) in DB" + e)
    }
}
async function deleteMany(model, conditions, document){
    try{
        console.log("Deleting object(s)")
        await model.deleteMany(conditions, document)
        console.log("Deleted object(s) successfully")
    }catch (e) {
        console.log("Error during Deleting Object(s) in DB" + e)
    }
}

async function deleteById(Model, id){
    try{
        console.log("Deleting object ")
        await Model.findByIdAndDelete(id)
        console.log("Deleted object successfully")
    }catch (e) {
        console.log("Error during Deleting object in DB " + e)
    }
}

async function close(){
    try{
        if(connection){
            console.log("closing connection")
            await connection.close()
            console.log("closed connection")
        }
    }catch (e) {
        console.log("Error during closing connection")
    }
    connection = undefined;
}

exports.connect     =   connect
exports.saveObject  =   saveObject
exports.insert      =   insert
exports.fetchData   =   fetchData
exports.close       =   close
exports.update      =   updateOne
exports.delete      =   deleteMany
exports.deleteById  =   deleteById

