// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'hwfzdutgwbjlre',
      password: '4085dd82876f70e8710ecc1e432f2026c7a42887c5cb59a6269235956f859f6a',
      database: 'dfvkf6t2nhvreo',
      host: 'ec2-54-83-25-217.compute-1.amazonaws.com',
      port: 5432,
      ssl: true
    },
    searchPath: 'knex,public'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
