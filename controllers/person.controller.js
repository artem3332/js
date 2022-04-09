const  pool=require('../db')

class PersonController {

    async createPerson(req,res){
        const{name}=req.body
        const sql = "INSERT INTO person(name,created_at) VALUES($1, $2) RETURNING id ";
        const data = [name,new Date()];

        pool.query(sql,data ,function(err, result) {
            if(err) res.json(err);
            res.json(result.rows[0].id)
        });
    }
}
module.exports=new PersonController()