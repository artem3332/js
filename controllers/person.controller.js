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
    async allChatPerson(req,res){
        const{id_person}=req.body
        const sql = "select * from chat where id in (select id_chat from person_chat where person_chat.id_person=$1)";
        const data=[id_person]

        pool.query(sql ,data,function(err, result) {
            if(err) res.json(err);
            res.json(result.rows)
        });
    }


}
module.exports=new PersonController()

