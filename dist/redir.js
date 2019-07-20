const http = require('http');
const express = require('express');
const cors = require('cors');

// set port number
const PORT = 80;//3000;

// setup server
const app = express();
const server = http.createServer(app);

// Allow CORS
app.use(cors());
app.get('/server', (req, res) => res.send('Redir Server Here'))
//app.get('/*', (req, res) => res.send('Redirect to index.html'))
app.get('/*', function(req, res) {
    res.sendFile('/home/smbsogbd/new.drshasf.com/index.html', function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
});

// Start listening
server.listen(PORT);
//server.listen();
console.log(`Redir Server listening on port ${PORT}`);
