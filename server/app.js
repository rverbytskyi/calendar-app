import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

import {serverPort} from '../etc/config.json';

import * as db from './utils/DataBaseUtils.js';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/events', (req, res) => {
  db.listEvents(req.query.userId).then(data => res.send(data));
});

app.get('/events/export/:userId', (req, res) => {
  db.exportEvents(req.params.userId).then(data => res.send(data));
});

app.post('/events', (req, res) => {
  db.createEvent(req.body).then(data => res.send(data));
});

app.delete('/events', (req, res) => {
  db.deleteEvent(req.query.idToDel).then(data => res.send(data));
});

app.post('/users', (req, res) => {
  db.signIn(req.body).then(data => {
    console.log("log from app",data);
    res.send(data);
  });
});

const server = app.listen(serverPort, () => {
  console.log('cal-cal');
});
