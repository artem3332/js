const userService=require('../service/UserService')

class UserController {

    async createUser(req,res){
        try{
            const x=await userService.createUser(req)
            res.json(x)
        } catch (e){
          res.status(500).json(e)
        }
    }

}
module.exports=new UserController()
