const display = {};
const connection = require('../connection');

//QUERIES
const getQuery = 'SELECT * FROM DISPLAY';

display.getAll = (callback) => {
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

/**
Ejecuta el query querySelectActivities en la base de datos predefinida con .createConnection()
**/
module.exports = display;
