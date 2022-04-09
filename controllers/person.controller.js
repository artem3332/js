const  pool=require('../db')

class PersonController {

    async createPerson(req,res){
        const{name}=req.body

        const sql = "INSERT INTO person(name,created_at) VALUES($1, $2) ";
        const data = [name,new Date()];
        const name1=[name]

        pool.query(sql,data ,function(err, results) {
            if(err) res.json(err);
            pool.query("Select id From person Where name=$1 ",name1,function(err, results1) {
                if(err) res.json(err);
                res.json(results1.rows)
            });
        });



    }
}

module.exports=new PersonController()