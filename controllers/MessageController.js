const messageService=require('../service/MessageService')

class MessageController {

    async createMessage(req,res){
        try{
            const x=await messageService.createMessage(req)
            res.json(x.rows[0].id)
        } catch (e){
            res.status(500).json(e)
        }
    }
    async allMessageChat(req,res){
        try{
            const x=await messageService.allMessageChat(req,res)
            res.json(x.rows)
        } catch (e){
            res.status(500).json(e)
        }
    }
}
module.exports=new MessageController()