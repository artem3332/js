const message_data=require("../DataBase").message


class MessageService{

    async createMessage(req) {
        const {id_user, id_chat, text} = req.body
        const data = [id_user, id_chat, text, new Date()];

        const id_message=await message_data.create({
            id_user:data[0],
            id_chat:data[1],
            text:data[2],
            created_at:data[3]
        })
        return id_message.id
    }


    async allMessageChat(req) {
        const {id_chat} = req.body
        const data = [id_chat];
        const messages=await message_data.findAll({
            where:{
                id_chat:data[0]
            },
            order:[
                ['created_at','DESC']
            ]
        })
        return messages
    }
}

module.exports=new MessageService()