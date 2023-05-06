 const express = require('express') // import the express library which return an express function

const app = express() // when we call this function it returns an instance of an application

// const ports = 3000 // the default port it will listen on

// app.get('/', (req, res) => {
//     res.send('Hello Worlds and students!') // the send method returns a response to a request that is a body of any content 
// })

// app.listen(ports, () => {
//     console.log(`Example app listening on port ${ports}`)
// })



app.get('/', function (req, res) {
    console.log("GET Request Received");
    res.send('<h2 style= "font-family: TimesNewRoman; color: black; "> Welcome to your Home GET Request!</h2>');
})

app.post('/', function (req, res) {
    console.log("GET Request Received");
    res.send('<h2 style= "font-family: TimesNewRoman; color: black; "> Welcome to your Home POST Request!</h2>');
})

app.put('/', function (req, res) {
    console.log("GET Request Received");
    res.send('<h2 style= "font-family: TimesNewRoman; color: black; "> Welcome to your Home PUT Request!</h2>');
})

app.options('/', function (req, res) {
    console.log("GET Request Received");
    res.send('<h2 style= "font-family: TimesNewRoman; color: black; "> Welcome to your Home OPTIONS Request!</h2>');
})

app.post('/addcourse', function (req, res) {
    console.log("POST Request Received");
    res.send('<h2 style="font-family: TimesNewRoman; color: black; "> Welcome to your AddCourse POST Request!</h2>');
})
app.delete('/delete', function (req, res) {
    console.log("DELETE Request Received");
    res.send('<h2 style="font-family: TimesNewRoman; color: black;"> Welcome to your Delete DELETE Request!</h2>');
})
app.get('/course', function (req, res) {
    console.log("GET Request received for /course URI");
    res.send('<h2 style="font-family: TimesNewRoman; color:black;"> Welcome to your Course GET Request!</h2>');
})

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));