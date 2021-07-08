const mongo_ops = require(__dirname + '/db_ops/mongo_ops')
const peopleModel = require(__dirname + '/models/peopleModel')
const jobModel = require(__dirname + '/models/jobModel')


const username="";
const password="";
const host="localhost";
const port="27017";
const database="";
const connectionString = `mongodb://${username}:${password}@${host}:${port}/${database}`

async function connectToDBAndInsertData(person){
    await mongo_ops.connect(connectionString);
    await mongo_ops.saveObject(person);
    //await mongo_ops.close();
}

async function connectToDBAndFetchData(model){
    //await mongo_ops.connect(connectionString);
    const data = await mongo_ops.fetchData(model);
    //await mongo_ops.close();
    return data;
}

async function connectToDBAndUpdateData(model, condition, documents){
    //await mongo_ops.connect(connectionString);
    await mongo_ops.update(model, condition, documents);
    //await mongo_ops.close();
}
async function connectToDBAndDeleteData(model, condition){
    //await mongo_ops.connect(connectionString);
    await mongo_ops.delete(model, condition);
    //await mongo_ops.close();
}

async function createJobInDB(){
    const JobModel = jobModel.getJobModel
    const job1 = new JobModel({name: 'Software Engineer', location: 'SF'})
    const job2 = new JobModel({name: 'DEVOPS Engineer', location: 'KL'})
    await connectToDBAndInsertData(job1)
    await connectToDBAndInsertData(job2)
    return job1
}

async function createPersonInDB(){

    const job1 = await createJobInDB()

    const PeopleModel = peopleModel.getPeopleModel
    const person1 = new PeopleModel({name: "SomePerson1", age: 10, Sex: "Not disclose"})
    const person2 = new PeopleModel({name: "SomePerson2", age: 100, Sex: "Not disclose"})
    const person3 = new PeopleModel({name: "SomePerson3", age: 30, Sex: "Not disclose"})
    const person4 = new PeopleModel({name: "SomePerson4", age: 30, Sex: "Not disclose", job: job1}) // person with job
    //const person5 = new PeopleModel({name: "SomePerson2", age: 102, Sex: "Not disclose"})   THIS WILL CAUSE VALIDATION FAILURE
    await connectToDBAndInsertData(person1)
    await connectToDBAndInsertData(person2)
    await connectToDBAndInsertData(person3)
    await connectToDBAndInsertData(person4)
}
async function updatePersonInDB(){
    const PeopleModel = peopleModel.getPeopleModel
    const condition = {name: {$eq : "SomePerson3"}}
    const documents = {name: "SomeOtherPerson"}
    await connectToDBAndUpdateData(PeopleModel, condition, documents)
}

async function deletePersonInDB(){
    const PeopleModel = peopleModel.getPeopleModel
    const condition = {name: "SomePerson1"};
    await connectToDBAndDeleteData(PeopleModel, condition)
}

async function readPersonsInDB(){
    const PeopleModel = peopleModel.getPeopleModel
    const peoples = await connectToDBAndFetchData(PeopleModel)
    peoples.forEach(function(people){
        console.log()
        console.log("Person's id   is   " + people._id);
        console.log("Person's name is   " + people.name);
        console.log("Person's age  is   " + people.age);
        console.log("Person's Sex  is   " + people.Sex);
        console.log("Person's job  is   " + people.job)
        console.log()
    });
}

async function close(){
    await mongo_ops.close()
}

createPersonInDB().then(() => {
    console.log("done insert person to DB")
    return readPersonsInDB()
}).then(()=> {
    console.log(' done reading Persons from DB');
    return updatePersonInDB();
}).then(()=>{
    console.log(' done updating Persons in DB');
    return readPersonsInDB()
}).then(()=>{
    console.log(' done deleting Person in DB');
    return deletePersonInDB()
}).then(()=>{
    return readPersonsInDB()
}).catch((e)=> console.log("Oops! "+ e)).finally( () =>close())

