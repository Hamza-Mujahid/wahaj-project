const mongoose = require('mongoose')
const mydb= async () => {

    try{
        await mongoose.connect("mongodb://localhost/studentportal");
        console.log("mongose Connected")

    }
    catch(e){console.log(e)}

}
module.exports = mydb