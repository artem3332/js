const  db=require('../db')


class UserController {

    async createUsers(req,res){
        const{username,created_ad}=req.body
        const newUser= await db.query('INSERT INTO users(username,created_at) VALUES (username,created_at)')
        console.log(username,created_ad)
        res.json(req.body)
    }


}

module.exports=new UserController()