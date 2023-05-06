const express = require('express');
const app = express();
const port = 3000;


//synchronous
// app.get('/', (req, res) => {
//     throw new Error("Hello error!")
//   })

  app.get('/', (req, res, next) => {
    try {
        throw new Error("Hello errorrrrrrrrrrrr!")
    }
    catch (error) {
        next(error)
    }
  })

//asynchronous

app.get('/', (req, res, next) => {
    try {
        throw new Error("Hello error!")
    }
    catch (error) {
        next(error)
    }
  })


  app.get('/', (req, res, next) => {
    setTimeout(() => {
        try {
            console.log("Async code example.")
            throw new Error("Hello Error!")
        } catch (error) { // manually catching
            next(error) // passing to default middleware error handler
        }
    }, 1000)
  })

app.listen(port, () => {
    console.log('Error', port)
})