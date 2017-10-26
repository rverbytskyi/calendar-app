import mongoose from 'mongoose';

import '../models/Event.js';
import '../models/User.js';

import {db} from '../../etc/config.json';

const Event = mongoose.model('Event');
const User = mongoose.model('User');

export function setUpConnection() {
  mongoose.Promise = global.Promise;
  mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`);
}

var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
  console.log("all is ok");
});

export function listEvents(userId="") {
  console.log("user id is: ", userId);
  return Event.find().byUserId(userId).exec(function(err, events) {
    if (err) return console.error(err);
});
}

export function findUser(data) {
  return User.find().byName(data.username).exec(function(err, user) {
    if (err) return console.error(err);
    if (user) return true;
  })
}

export function createEvent(data) {
  const event = new Event({
    _id: data.id,
    title: data.title,
    start: data.start,
    duration: data.duration,
    ampm: data.ampm,
    userId: data.userId
  });
  return event.save();
}

export function createUser(id, username) {
  console.log("user was created");
  const user = new User({
    username: username
  });
  return user.save();
}

export function signIn(data) {
  return User.findOne().byUserName(data.username).exec(function(err, user) {
    if (err) return console.error(err);
    if (user===null) {
      createUser(data.username)
      return user
    }
    return user
  })
}

export function deleteEvent(id) {
  return Event.findById(id).remove();
}
