// https://www.robinwieruch.de/minimal-node-js-babel-setup/
// ToDo: migrate to Redis from Javascript Object
/*import http from 'http';
import express from 'express';
import cors from 'cors';
import io from 'socket.io';*/

const http = require('http');
const express = require('express');
const cors = require('cors');
const io = require('socket.io');

//import config from '../config/config.json';
//import events from 'events.js';
var fs = require('fs');

// set port number
//const PORT = 3000;

// setup server
const app = express();
const server = http.createServer(app);
const socketIo = io(server);

// Allow CORS
app.use(cors());
app.get('/server', (req, res) => res.send('Server Here'))
//app.get('/*', (req, res) => res.send('Redirect to index.html'))
app.get('/*', function(req, res) {
    res.sendFile('/home/smbsogbd/new.drshasf.com/index.html', function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
});

// load events file
var events = require('./ServerData/events.json'); // loads synchronosly

// compute liveTodayIDs
	// find number of current and future events
	let i = 0;
	let d = new Date(); // time now, compare with near midnight of last event date
	while ( Date.parse(events[i].dates.slice(-1)+"T23:59:59") >= d.getTime() ) // end of last day is later than now
        i += 1;
    let index = i-1; // Index = current or next event
    console.log(`index: ${index}`)
        
	// check if events[i] is happening today
	let event = events[i-1];

	//this.state = { imgsrc: "./image/"+event.dates[0]+".jpg" } 
	let imgsrc = "./image/"+event.dates[0]+".jpg";

	let start = Date.parse(event.dates.slice(0,1)); // begining of first day
	let end = Date.parse(event.dates.slice(-1)+"T23:59:59"); // end of last day
	let now = d.getTime();

    let liveTodayID = "";
	if ( (start < now) && (now < end) ) liveTodayID = event.id;


// load users file, it is string list of user profile object+CR
var usersFile = fs.readFileSync('ServerData/users.txt','utf8');
var usersArray = usersFile.split('\n'); // string array of user profiles
usersArray.pop(); // remove last empty string

var users = [];
usersArray.forEach( function(user) { 
    //console.log(user);
    users.push(JSON.parse(user)); // convert array of strings to array of objects
    }); 
//console.log(users);

// Start listening
//server.listen(PORT);
server.listen();
//console.log(`Login Server listening on port ${PORT}`);

//var admins = ['jasonjangho@yahoo.com']; // list of administrators
var profile = {};
var errLogin = '';
var errSignup = '';

// Setup socket.io
socketIo.on('connection', socket => {
    // connected
    const username = socket.handshake.query.username;
    console.log(`${username} connected`);

    // send events
    socket.emit('server:events', [events, index, liveTodayID]);
    console.log('events sent');

    // login received
    socket.on('client:login', data => {
        data.time = new Date().getTime();
        console.log(JSON.stringify(data));
        // lookup user
        let i = users.findIndex( object => object.email == data.email )
        console.log(i);
        if (i > -1) {
            console.log('Email Found');
            if (users[i].password == data.password) {
                console.log('Password Match');
                // authenticated, send user profile
                profile = users[i];
                socket.emit('server:profile', profile);
            }
            else {
                console.log('Password Incorrect');
                // authentication failed, send error message
                errLogin = 'Email found, password incorrect'
                socket.emit('server:errLogin', errLogin);
            }
        }
        else {
            // authentication failed, send error message
            errLogin = 'Email not found';
            console.log(errLogin);
            socket.emit('server:errLogin', errLogin);
        }
        // log to file
        fs.appendFile('ServerData/log.txt', JSON.stringify(data) + '\n', function (err) {
            if (err) console.log(err);
        });
    });

    // signup received
    socket.on('client:signup', data => {
        data.time = new Date().getTime();
        console.log(JSON.stringify(data));
        // if email already exists, send message
        if (users.findIndex( object => object.email == data.email ) > -1) {
            console.log('Email already exists');
            errSignup = 'Email already exists'
            socket.emit('server:errSignup', errSignup);
        }
        // if no existing account, create user profile and send it
        else {
            profile = { email:data.email, name:data.name, password:data.password, events:[] }
            users.push(profile);
            socket.emit('server:profile', profile);
            fs.appendFile('users.txt', JSON.stringify(profile) + '\n', function (err) {
                if (err) console.log(err);
            })

            // log to file
            fs.appendFile('log.txt', JSON.stringify(data) + '\n', function (err) {
                if (err) console.log(err);
            })
        }
    });
    socket.on('disconnect', () => {
        console.log(`${username} disconnected`);
    });
});