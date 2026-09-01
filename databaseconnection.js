const {Pool}=require("pg");
require("dotenv").config();


const pool=new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:Number(process.env.DB_PORT)
});

const testDBConnection=async()=>{
    try {
        const client=await pool.connect();
        console.log("Successfully connected to the database.");
      
        
    } catch (err) {
        console.error("DB Connection Error:",err.message);
    }
}

testDBConnection();

module.exports=pool;