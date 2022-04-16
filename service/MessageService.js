const  pool=require('../db')


class MessageService{

    async createMessage(req) {
        const {id_user, id_chat, text} = req.body
        const sql = "INSERT INTO message(id_user,id_chat,text,created_at) VALUES($1, $2, $3, $4) RETURNING id ";
        const data = [id_user, id_chat, text, new Date()];
        return pool.query(sql, data);
    }
    async allMessageChat(req) {
        const {id_chat} = req.body
        const sql = "select * from message where id_chat=$1 order by message.created_at DESC";
        const data = [id_chat];
        return pool.query(sql, data);
    }
}

module.exports=new MessageService()