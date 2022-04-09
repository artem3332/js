const  pool=require('../db')

class ChatController {

    async createChat(req,res){

        const{name}=req.body

        const sql = "INSERT INTO chat(name,created_at) VALUES($1, $2) ";
        const data = [name,new Date()];
        const chat=[name]


        pool.query(sql,data ,function(err, results) {
            if(err) res.json(err);
            pool.query("Select id From chat Where name=$1 ",chat,function(err, results1) {
                if(err) res.json(err);
                res.json(results1.rows)


            });
        });




    }
}

module.exports=new ChatController()