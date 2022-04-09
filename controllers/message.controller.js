const  pool=require('../db')

class MessageController {

    async createMessage(req,res){

        const{id_person,id_chat,text}=req.body
        const sql = "INSERT INTO message(id_person,id_chat,text,created_at) VALUES($1, $2, $3, $4) RETURNING id ";
        const data = [id_person,id_chat,text,new Date()];

        pool.query(sql,data ,function(err, result) {
            if(err) res.json(err);
            res.json(result.rows[0].id)
        });

    }
}
module.exports=new MessageController()