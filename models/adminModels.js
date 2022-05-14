const mongoose = require('mongoose')

const {Schema} = mongoose

const adminSchema = new Schema ({

    adminName: String,
    adminEmail: {type: String},
    adminPass: {type: String},
    adminContact: {type: String},
    adminCnic: {type:String}
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin