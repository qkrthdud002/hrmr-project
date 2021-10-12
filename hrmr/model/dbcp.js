const mariadb = require('mariadb')

const pool= mariadb.createPool({
    host:'localhost',
    port: 3306,
    database: 'hrmr',
    user: 'hrmr',
    password: 'hrmr1234',
    connectionLimit: 4
});

module.exports.getConnection = async()=>{
    return await pool.getConnection();
}