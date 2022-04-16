const chatService=require('../service/ChatService')

class ChatController {
    async createChat(req,res){
        await chatService.createChat(req,res)

    }
    async allChatUser(req,res){
        try{
            const x=[await  chatService.allChatUser(req)]
            res.json(x.pop().rows)
        }catch (e){
            res.status(500).json(e)
        }
    }
}

module.exports=new ChatController()