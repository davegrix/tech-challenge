const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('OK')
})

app.get('/converter', (req, res) => {

})


const server = app.listen(port, () => {
    console.log(`express server started on port ${port}`)
})

module.exports = server;