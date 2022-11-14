
const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/F8_edu_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect success')
    }
    catch(err){
        console.log('Error connecting')
    }
}

module.exports = {connect}