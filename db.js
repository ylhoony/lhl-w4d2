
// pg setup
// const pg = require('pg');

// KNEX setup
const settings = require("./settings");
const pg = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  },
  searchPath: 'knex,public'
});

// knex
module.exports = {
  connect: (done) => {

    const client = pg.Client();

    client.connect((error) => {
      if (error) throw error;
      done(error, client);
    });
  },
  close: (client) => {
    client.end((error) => {
      if (error) throw error;
    });
  }
}




// var config = {
//   user: 'kjensen', //env var: PGUSER
//   database: 'w4d2', //env var: PGDATABASE
//   password: '', //env var: PGPASSWORD
//   host: 'localhost', // Server hosting the postgres database
//   port: 5432 //env var: PGPORT
// };


// const config = new pg.Client({
//   user     : settings.user,
//   password : settings.password,
//   database : settings.database,
//   host     : settings.hostname,
//   port     : settings.port,
//   ssl      : settings.ssl
// });


// knex
module.exports = {
  connect: (done) => {
    const client = pg.Client();

    client.connect((error) => {
      if (error) throw error;
      done(error, client);
    });
  },
  close: (client) => {
    client.end((error) => {
      if (error) throw error;
    });
  }
}




// pg connect
// module.exports = {
//   connect: (done) => {
//     const client = new pg.Client(config);

//     client.connect((error) => {
//       if (error) throw error;
//       done(error, client);
//     });
//   },
//   close: (client) => {
//     client.end((error) => {
//       if (error) throw error;
//     });
//   }
// }


