const  pool=require('../db')

class UserController {

    async createUsers(req,res){
        const{username}=req.body

        const sql = "INSERT INTO users(username,created_at) VALUES($1, $2) ";
        const data = [username,new Date()];
        const name=[username]

        pool.query(sql,data ,function(err, results) {
            if(err) res.json(err);
            pool.query("Select id From users Where username=$1 ",name,function(err, results1) {
                if(err) res.json(err);
                res.json(results1.rows)
            });
        });



    }
}

module.exports=new UserController()