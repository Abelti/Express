const express =  require('express');
const app = express();
const router = express.Router();
const port = 3000;

router.use('/user/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next();
});


app.use('/', router)



const hellorouter = require('./hello');
app.use('/hello', hellorouter);

app.listen(port, () => {
    console.log('Server listening on port', port);
});
