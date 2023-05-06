const express = require('express');
const app = express();
const port = 3000;

app.use('/user/:id', (req, res, next) => {
    console.log('Time:', Date.now())
    console.log('Request type:', req.method)
    next()
})


app.listen(port, () => {
    console.log('Server listening on port ' + port)
});