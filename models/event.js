const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: [true, 'The event name is required']
  },
  info: {
    type: String,
    required: [true, 'The event info is required']
  },
  specs: {
    type: Array,
    default: []
  },
  image: {
    type: String, default: ''
  }   
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;