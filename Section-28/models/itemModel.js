const mongoose = require('mongoose')
const dbOps = require('../db_ops/dbOps');

const Schema =  mongoose.Schema

const ITEM_SCHEMA =
    {
        task: {
            type: String,
            required: [true]
        }
    };
const itemSchema = new Schema(ITEM_SCHEMA);
const itemModel = new mongoose.model("item", itemSchema);


exports.itemSchema = itemSchema
exports.getItemModel = itemModel;

exports.insertTodoItems = async function(tasks) {
    const data = []
    tasks.forEach(function (task) {
        data.push(new itemModel({task: task}))
    })
    await dbOps.connectToDBAndInsertDatas(itemModel, data)
}

exports.insertTodoItem = async function(task) {
    const item = new itemModel({task: task})
    return await dbOps.connectToDBAndInsertData(item)
}

exports.deleteTodoItem = async function(taskId) {
    return await dbOps.connectToDBAndDeleteData(itemModel, taskId)
}

exports.fetchTodoItems = async function() {
    return await dbOps.connectToDBAndFetchData(itemModel)
}