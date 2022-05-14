const Admin = require('../models/adminModels')

exports.adminLogin = async (req, res)=>{
    const admin = await Admin.create(req.body)
    console.log('Saved');
    res.send(admin);
}

exports.adminGetLogin = async (req, res) => {
    const adminGetData = await Admin.find()
    res.send(adminGetData)
    console.log(adminGetData)
}
exports.adminUpdateLogin = async (req, res) => {
    const getID = {id: req.params.id}
    const adminObj = {
        adminName: req.body.adminName,
        adminEmail: req.body.adminEmail,
        adminPass: req.body.adminPass,
        adminContact: req.body.adminContact
    }
    const adminUpdatedData = await Admin.findOneAndUpdate(getID, adminObj)
    res.send(adminUpdatedData)
    console.log(adminUpdatedData)
}
exports.adminRemove = (req, res) => {
    const removeAdmin = Admin.findByIdAndRemove(req.params.id)
    //res.send(removeAdmin)
    console.log(removeAdmin);
}