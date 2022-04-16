const pool = require("../db");


class ChatService {
    async createChat(req, res) {
        const {name, user_ids} = req.body
        const sql = "INSERT INTO chat(name,created_at) VALUES($1, $2) RETURNING id ";
        const data = [name, new Date()];
        pool.query(sql,data ,function(err, result) {
            if(err) res.json(err);
            for (const user_id in user_ids) {

                const sql = "INSERT INTO user_chat(id_user,id_chat) VALUES($1, $2) ";
                const data1=[user_ids[user_id],result.rows[0].id];

                pool.query(sql,data1 ,function(err) {
                    if (err) res.json(err) ;

                });
            }
            res.json(result.rows[0].id) ;


        });

    }


    async allChatUser(req) {
        const {id_user} = req.body
        const sql = "select  chat.id,chat.name,chat.created_at from chat where chat.id in (select  id_chat from user_chat where id_user=$1)"
        const data = [id_user];
        return pool.query(sql, data)
    }


}


module.exports=new ChatService()

