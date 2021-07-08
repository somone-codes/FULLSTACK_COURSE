const mongoose = require('mongoose')
const dbOps = require('../db_ops/dbOps');
const itemModel = require('./itemModel');

const Schema =  mongoose.Schema

const LIST_SCHEMA =
    {
        name: {
            type: String,
            required: [true]
        },
        tasks: [itemModel.itemSchema]
    };
const listSchema = new Schema(LIST_SCHEMA);
const listModel = new mongoose.model("list", listSchema);


exports.insertListItems = async function(listName, tasks) {
    const _tasks = await itemModel.insertTodoItems(tasks)
    const list = new listModel({ name: listName, tasks: _tasks})
    await dbOps.connectToDBAndInsertDatas(listModel, list)
    return _tasks
}

exports.fetchOneList = async function(listName) {
    const condition = {name: {$eq: listName}};
    return await dbOps.findOne(listModel, condition);
}

exports.saveListObject = async function(object, task) {
    const _tasks = await itemModel.insertTodoItem(task)
    object.tasks.push(_tasks)
    return await dbOps.saveObject(object);
}

exports.findOneListItemAndDelete = async function (listName, taskId) {
    const findCondition = {name: listName};
    const deleteCondition = {$pull: {tasks: {_id: taskId}}};
    return await dbOps.findOneAndUpdate(listModel, findCondition, deleteCondition);
}