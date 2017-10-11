import express from 'express';
import bodyParser from 'body-parser';

import {serverPort} from '../etc/config.json';

import * as db from './utils/DataBaseUtils.js';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.get('/events', (req,res) => {
    db.listEvents().then(data => res.send(data));
});

app.post('/events', (req,res) => {
    db.createEvent(req.body).then(data => res.send(data));
});

app.delete('/events/:id', (req,res) => {
    db.deleteEvent(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, ()=>{
    console.log('cal-cal');
});
