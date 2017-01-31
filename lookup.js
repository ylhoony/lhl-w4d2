const input = process.argv[2];

const lookupfn = require('./lookup_fn');

lookupfn.getList(input);

// const pg = require("pg");
// const settings = require("./settings");

// const client = new pg.Client({
//   user     : settings.user,
//   password : settings.password,
//   database : settings.database,
//   host     : settings.hostname,
//   port     : settings.port,
//   ssl      : settings.ssl
// });


// function getList (name) {
//   console.log('Searching...');
//   client.connect((err) => {
//     if (err) {
//       return console.error("Connection Error", err);
//     }
//     client.query("SELECT * FROM famous_people WHERE first_name = $1::text", [input], (err, result) => {
//       if (err) {
//         return console.error("error running query", err);
//       }
//       // console.log('Searching...');
//       console.log(result.rows);
//       // console.log(result.rows[0].number); //output: 1
//       client.end();
//     });
//   });

// }
// getList(input);





// function print (name) {
//  console.log(name);
// }

// print(input);