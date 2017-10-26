import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    _id: {type: String, required: true},
    title: {type: String},
    start: {type: Number, required: true},
    duration: {type: Number, required: true},
    ampm: {type: String, required: true},
    userId: {type: String, required: true}
});

EventSchema.query.byUserId = function(userId) {
  return this.find({userId: userId});
};

const Event = mongoose.model('Event', EventSchema);
