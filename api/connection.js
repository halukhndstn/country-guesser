import pkg from 'pg'; 
const { Pool } = pkg;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "postgres"
});

export default pool;
