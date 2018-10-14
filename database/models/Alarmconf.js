const alarmConf = {};
const connection = require('../connection');

//QUERIES
const getQuery = 'SELECT * FROM ALARMCONF';

/**
Ejecuta el query querySelectHouses en la base de datos
Luego ejecuta el callback que se le pasa en @param callback
**/
alarmConf.getAll = (callback) => {
    if (connection){
      connection.query(getQuery, (err, rows) => {
        //Callback for query
        if(err) {
          throw err;
        } else {
          callback(null, rows);
        }
      });
    }
  }

module.exports = alarmConf;
