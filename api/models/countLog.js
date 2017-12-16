const mongoose =  require('./base');



const logCountSchema = mongoose.Schema({
    count: Number
})

const CountLog = mongoose.model('CountLog', logCountSchema);

module.exports = CountLog;
