const mongo_ops = require('./mongo_ops');

function getConnectionString(){
    const username="";
    const password="";
    const host="localhost";
    const port="27017";
    const database="todoListDB";
    return `mongodb://${username}:${password}@${host}:${port}/${database}`

}

exports.connectToDBAndInsertData = async function(dataModel){
    await mongo_ops.connect(getConnectionString());
    await mongo_ops.saveObject(dataModel);
    await mongo_ops.close();
}
exports.connectToDBAndDeleteData = async function(dataModel, id){
    await mongo_ops.connect(getConnectionString());
    await mongo_ops.deleteById(dataModel, id);
    await mongo_ops.close();
}
exports.connectToDBAndInsertDatas = async function(dataModel, dataArray){
    await mongo_ops.connect(getConnectionString());
    await mongo_ops.insert(dataModel, dataArray);
    await mongo_ops.close();
}
exports.connectToDBAndFetchData  = async function (model){
    await mongo_ops.connect(getConnectionString());
    const data = await mongo_ops.fetchData(model);
    await mongo_ops.close();
    return data;
}

exports.findOne = async function(model, condition) {
    await mongo_ops.connect(getConnectionString());
    const data = await mongo_ops.findOne(model, condition);
    await mongo_ops.close();
    return data;
}

exports.saveObject = async function(object) {
    await mongo_ops.connect(getConnectionString());
    await mongo_ops.saveObject(object);
    await mongo_ops.close();
}
exports.findOneAndUpdate = async function(model, findCondition, updateCondition) {
    await mongo_ops.connect(getConnectionString());
    await mongo_ops.findOneAndUpdate(model, findCondition, updateCondition);
    await mongo_ops.close();
}


