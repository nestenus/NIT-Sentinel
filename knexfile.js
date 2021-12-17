// Update with your config settings.

module.exports = {

    development: {
        client: 'pg',
        debug: false,
        connection: {
            host: "post dev",
            user: "postgres",
            password: "postgres password",
            database: "postgress db"
        },
        migrations: {
            directory: __dirname + '/db/pg/migrations'
        }
    },

    predev: {
        client: 'pg',
        debug: false,
        connection: 'postgres://postgres:mysecretpassword@localhost/postgress db',
        migrations: {
            directory: __dirname + '/db/pg/migrations'
        }
    },
};
