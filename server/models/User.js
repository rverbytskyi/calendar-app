import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true}
});

UserSchema.query.byUserName = function(userName) {
  return this.findOne({username: userName});
};

const User = mongoose.model('User', UserSchema);
