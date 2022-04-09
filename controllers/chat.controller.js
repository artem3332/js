const  pool=require('../db')

class ChatController {
    async createChat(req,res){
        const{name,person_ids}=req.body
        const sql = "INSERT INTO chat(name,created_at) VALUES($1, $2) RETURNING id ";
        const data = [name,new Date()];

        pool.query(sql,data ,function(err, result) {
            if(err) res.json(err);
                for (const person_id in person_ids) {

                    const sql = "INSERT INTO person_chat(id_person,id_chat) VALUES($1, $2) ";
                    const data1=[person_ids[person_id],result.rows[0].id]

                    pool.query(sql,data1 ,function(err, results) {
                        if (err) res.json(err);
                    });
                }
                res.json(result.rows[0].id)
        });
    }

    async allMessageChat(req,res){
        const{id_chat}=req.body
        const sql = "select * from message where id_chat=$1 order by message.created_at";
        const data=[id_chat]

        pool.query(sql ,data,function(err, result) {
            if(err) res.json(err);
            res.json(result.rows)
        });
    }
}
module.exports=new ChatController()