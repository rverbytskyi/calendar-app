import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const EventSchema = new Schema({
    title: {type: String},
    start: {type: String, required: true},
    duration: {type: Number, required: true},
    ampm: {type: String, required: true},
});

const Event = Mongoose.model('Event', EventSchema);
