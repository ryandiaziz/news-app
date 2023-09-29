require('dotenv').config()
import * as pg from 'pg';

module.exports = {
    development: {
        username: 'postgres',
        password: 'admin',
        database: 'news-app',
        host: '127.0.0.1',
        port: 5432,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    test: {
        username: process.env.CI_DB_USERNAME,
        password: process.env.CI_DB_PASSWORD,
        database: process.env.CI_DB_NAME,
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    production: {
        username: "default",
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
        dialectOptions: {
            module: pg,
            bigNumberStrings: true,
            ssl: {
                require: true
            }
        }
    }
};