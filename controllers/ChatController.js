const chatService=require('../service/ChatService')

class ChatController {
    async createChat(req,res){
        try{
            const x=await chatService.createChat(req,res)
            res.json(x)
        }catch (e){
            res.status(500).json(e)
        }

    }
    async allChatUser(req,res){
        try{
            const x=[await  chatService.allChatUser(req)]
            res.json(x)
        }catch (e){
            res.status(500).json(e)
        }
    }
}

module.exports=new ChatController()