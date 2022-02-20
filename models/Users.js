var mongoose = require('mongoose')
var {Schema} = mongoose
var autoIncrement = require('mongoose-auto-increment')

const usersSchema = new Schema ({
    name: String,
    address: String,
    email: String,
    phone: String,
})

autoIncrement.initialize(mongoose.connection)
usersSchema.plugin(autoIncrement.plugin, {
    model: 'usersSchema',
    field: 'queueNumber',
    startAt: 1,
    incrementBy: 1
})

const Users = mongoose.model('Users', usersSchema )
module.exports = Users