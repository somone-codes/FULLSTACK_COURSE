
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https')

const weatherMapApiKey = "";
//const weatherInfoWebsiteUser = "https://home.openweathermap.org/";
const weatherBaseUrl = "https://api.openweathermap.org";
const weatherImageBaseUrl = "https://openweathermap.org";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/ping', (request, response)=>{
    response.send("pong");
});

function fetchIconEndpoint(icon){
    let weatherEndpoint = `${weatherImageBaseUrl}/img/wn/${icon}@2x.png`;
    return weatherEndpoint;

}
function fetchDataPromise(weatherEndpoint){
    return new Promise(resolve => {
        https.get(weatherEndpoint, (resp) => {
            let response = {}
            resp.on("data", (data) => {
                const jsonResp = JSON.parse(data);
                const temp = jsonResp.main.temp;
                const desc = jsonResp.weather[0].description;
                const icon = jsonResp.weather[0].icon;
                console.log("");
                response = {"temp": temp, "description": desc, "icon": icon};
            });

            resp.on('end', () => {
                resolve(response);
            })
        });
    });
}

async function fetchData(city, response){
    let weatherEndpoint = weatherBaseUrl + "/data/2.5/weather?";
    weatherEndpoint += "appid=" + weatherMapApiKey;
    weatherEndpoint += "&q=" + city
    console.log("")
    await fetchDataPromise(weatherEndpoint).then((data) => {
        response.write(`<h1>The temperature in ${city} is ${data.temp}</h1>`);
        response.write(`<p>The weather currently is ${data.description}</p>`);
        let iconLink = fetchIconEndpoint(data.icon);
        response.write(`<img src=${iconLink} alt="weather icon.">`);
        response.send();
    });
    console.log("")

}

app.get('/', (request, response)=>{
    response.sendfile(__dirname + "/index.html")
});

app.post('/weatherInfo', (request, response)=>{
    let city = "Bengaluru";
    let body = request.body;
    if (body.city && body.city != '') {
        city = body.city;
    }
    fetchData(city, response);
    console.log("")
});

const serverPort = 3000;
app.listen(serverPort, ()=>{
    console.log("I'm ready to server on " + serverPort)
});
