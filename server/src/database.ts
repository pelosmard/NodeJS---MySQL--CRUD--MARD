// import mysql from 'promise-mysql';
/*
import mysql from 'mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);


pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
  
    // Use the connection
    connection.query('SELECT something FROM sometable', function (error, results, fields) {
      // When done with the connection, release it.
      connection.release();
  
      // Handle error after the release.
      if (error) throw error;
  
      // Don't use the connection here, it has been returned to the pool.
    });
  });
  */
/*
pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });


export default pool;

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB is connected');
})
export default pool;
*/
import {createPool} from 'mysql2/promise';
import keys from './keys';


export async function connect(){
    const connection = createPool(keys.database);

    return connection;
}