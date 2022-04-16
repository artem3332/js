const pool = require("../db");

class UserService {

    createUser(req) {
        const {name} = req.body;
        const sql = "INSERT INTO users(name,created_at) VALUES($1, $2) RETURNING id ";
        const data = [name, new Date()];
        return  pool.query(sql, data);
    }
}
module.exports=new UserService()




