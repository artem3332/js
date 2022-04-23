const user_data=require("../DataBase").user
class UserService {

    async createUser(req) {
        const {name} = req.body;
        const data = [name, new Date()];
        const id_user=await user_data.create(
            {
                name:data[0],
                created_at:data[1]
            }
        )
        console.log(id_user.id)
        return id_user.id

    }


}
module.exports=new UserService()




