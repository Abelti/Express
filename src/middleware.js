const express = require('express')
const app = express()

console.log('Hello first') //1
app.use(express.json())
app.use(testMiddleware);

app.use(logMiddleware); // this function puts the specified middleware function at the specified path
//4
app.use(testMiddleware);


app.get('/', (req, res, next) => {
    res.send('Home Page')
    console.log('Home page')
    next();
})//5
console.log('Text') //2
app.use(testMiddleware);//6

app.get('/users', (req, res) => {
    res.send('Users Page')
    console.log('Users pages')
})

function logMiddleware (req, res, next) {
    console.log('Inside Middleware');
    console.log(`${new Date().toString()}: ${req.originalUrl}`)
    console.log();
    next();
}

function testMiddleware (req, res, next) {
    console.log('Test Middleware');
    console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
    console.log();
    next();
}


app.listen(4000, () => {
    console.log('Server started')
})//3

console.log('Second text')