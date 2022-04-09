const  pool=require('../db')

class MessageController {

    async createMessage(req,res){
        const{text}=req.body

        const sql = "INSERT INTO message(text,created_at) VALUES($1, $2) ";
        const data = [text,new Date()];
        const name=[text]

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