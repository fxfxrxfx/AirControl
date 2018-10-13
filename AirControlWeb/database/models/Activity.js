const activity = {};
const connection = require('../connection');

activity.getAll = (callback) => {
      if (connection){
        connection.query('SELECT * FROM ACTIVITY', (err, rows) => {
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
module.exports = activity;
