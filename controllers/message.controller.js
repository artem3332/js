const  pool=require('../db')

class MessageController {

    async createMessage(req,res){
        const{id_person,id_chat,text}=req.body

        const sql = "INSERT INTO message(id_person,id_chat,text,created_at) VALUES($1, $2, $3, $4) ";
        const data = [id_person,id_chat,text,new Date()];
        const name=[text]

        console.log(data)

        pool.query(sql,data ,function(err, results) {
            if(err) res.json(err);
            pool.query("Select id From message Where text=$1 ",name,function(err, results1) {
                if(err) res.json(err);
                res.json(results1.rows)
            });
        });



    }
}

module.exports=new MessageController()