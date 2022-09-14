import query from "../../connection.js";

const sqlString =`CREATE TABLE IF NOT EXISTS users(
    user_id TEXT PRIMARY KEY,
    full_name varchar(255),
    created timestamp not null default CURRENT_TIMESTAMP
  )`



async function createTable() {
    const res = await query(sqlString);
  
    console.log("Created new Table", res);
    //calling the res through console log this is the result for query array
  }
  
  createTable();