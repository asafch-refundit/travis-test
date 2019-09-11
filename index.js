const _ = require('lodash');
const knex = require('knex');
const redis = require('async-redis');

const redisClient = redis.createClient();
const db = knex({
                client: 'pg',
                searchPath: ['main'],
                pool: {
                    min: 1,
                    max: 1
                },
                connection: {
                    host: 'localhost',
                    port: 5432,
                    user: 'potgres',
                    database: 'refundit'
                },
                debug: true
            });

console.log(`Is {} empty? ${_.isEmpty({})}`);
console.log(`Hello, world!`);

const setR = await redisClient.set('key', 17);
const get = await redisClient.get('key');

console.log(`get: ${get}`);

