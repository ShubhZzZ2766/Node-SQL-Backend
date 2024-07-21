import { createPool } from 'mysql2/promise'
import { config } from 'dotenv';

config();

const pool = createPool({
    port: 3306,
    password: 'Shubham@123',
    host: 'localhost',
    database: 'ecom',
    user: 'root'
});

const connectToDatabase = async () => {
    try {
        await pool.getConnection();
        console.log("MySQL Connection Successful");
    } catch (error) {
        console.log("Database Connection Error");
        console.log(error);
        throw error;
    }
};

export { connectToDatabase, pool };