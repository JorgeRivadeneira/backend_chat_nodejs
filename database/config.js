const mongoose = require('mongoose');
const strConnection = require('./db');

const dbConnection = async () => {
    try{

        
        await mongoose.connect(process.env.DB_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true
        });
        console.log('Databse online..!');
    }catch(error){
        console.log(error);
        throw new Error(`Error en la BDD: ${error}`);
    }
}

module.exports = {
    dbConnection
}