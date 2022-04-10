const  pool=require('../db')

class MessageController {

    async createMessage(req,res){

        const{id_user,id_chat,text}=req.body
        const sql = "INSERT INTO message(id_user,id_chat,text,created_at) VALUES($1, $2, $3, $4) RETURNING id ";
        const data = [id_user,id_chat,text,new Date()];

        pool.query(sql,data ,function(err, result) {
            if(err) res.json(err);
            res.json(result.rows[0].id)
        });

    }
    async allMessageChat(req,res){
        const{id_chat}=req.body
        const sql = "select * from message where id_chat=$1 order by message.created_at DESC";
        const data=[id_chat];

        pool.query(sql ,data,function(err, result) {
            if(err) res.json(err);
            res.json(result.rows)

        });
    }
}
module.exports=new MessageController()