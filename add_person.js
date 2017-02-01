// Implement an add_person.js script that takes in the first name,
// last name and date of a famous person as three command line arguments
// and uses Knex to perform an insert.


const settings = require("./knexfile");
const knex = require('knex')(settings.development);

module.exports = {

  addPerson: (personInfo) => {
    console.log('Adding...');

    let first_name = personInfo[0];
    let last_name =  personInfo[1];
    let dateOfBirth =  personInfo[2];

    knex('famous_people').insert({
      first_name: first_name,
      last_name: last_name,
      birthdate: dateOfBirth
    }).catch((err) => {
      console.error(err);
    }).finally(() => {
      knex.destroy();
    });
  }
}