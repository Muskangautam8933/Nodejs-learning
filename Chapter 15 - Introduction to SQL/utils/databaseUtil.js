const mysql = require('mysql2');

//jab ham connection banate hai to hamko jb use krna hai tb connection banayenge phir jab usenhi krna hai tb usko clone kr denge isse bachne ke liye ham connection pool banate hai
const pool = mysql.createPool({
    host : 'localhost',
    user:'root',
    password:'muskan8933',
    database : 'airbnb'
})

module.exports = pool.promise();