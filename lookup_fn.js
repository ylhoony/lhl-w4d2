
const db = require('./db');


module.exports = {

  getList: (name) => {
    console.log('Searching...');
    db.connect((err, client) => {
      // if (err) {
      //   return console.error("Connection Error", err);
      // }
      client.query("SELECT * FROM famous_people WHERE first_name = $1::text", [name], (err, result) => {
        if (err) {
          return console.error("error running query", err);
        }
        // console.log('Searching...');
        console.log('- ' + result.rows[0].id + ": " + result.rows[0].first_name + " " + result.rows[0].last_name + ', born ' + result.rows[0].birthdate);
        // console.log(result.rows[0].number); //output: 1
        client.end();
      });
    });
  }

}