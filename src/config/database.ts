import pg from 'pg';
import './setup.ts';

const { Pool } = pg;

const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export defautl connection;