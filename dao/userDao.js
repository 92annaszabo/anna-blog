const { db_get, db_getAll, db_run } = require('../services/db-service');

module.exports = {
    getUser(username, password){
        console.log(username,password)
        console.log(db_get(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`))//ez pending marad
        return db_get(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`)
    }
}