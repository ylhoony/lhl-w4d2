
const db = require('./db');

// const settings = require("./settings");

const settings = require("./settings2");
const knex = require('knex')(settings);

module.exports = {

  getList: (name) => {
    console.log('Searching...');

    knex.select('*').from('famous_people').where({first_name: name})
    .then((result) => {
      // console.log(result);
      for (let item in result) {
      console.log('- ' + result[item].id + ": " + result[item].first_name + " " + result[item].last_name + ', born ' + result[item].birthdate);
      }
    }).catch((err) => {
      console.error(err);
    }).finally(() => {
      knex.destroy();
    });
  }
}