import Mongoose from 'mongoose';

import '../models/Event';

import {db} from '../../etc/config.json';

const Event = Mongoose.model('Event');

export function setUpConnection(){
    Mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`);
}

export function listEvents(){
    return Event.find();
}

export function createEvent(data){
    const event = new Event({
        title: data.title,
        start: data.time,
        duration: data.duration,
        ampm: data.ampm
    });

    return event.save();
}

export function deleteEvent(id){
    return Event.findById(id).remove();
}
