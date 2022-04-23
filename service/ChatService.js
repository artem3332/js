const chat_data=require("../DataBase").chat
const user_chat_data=require("../DataBase").user_chat

class ChatService {
    async createChat(req) {
        const {name, user_ids} = req.body
        const data = [name, new Date()];
        const id_chat=await chat_data.create(
            {
            name:data[0],
            created_at:data[1]
            }
        )
        for(const id_users of user_ids){
            await user_chat_data.create(
                {
                id_user:id_users,
                id_chat:id_chat.id,
                }
            )
        }
        return id_chat.id
    }
    async allChatUser(req) {
        const {id_user} = req.body
        const data = [id_user];
        const id_chats=[await user_chat_data.findAll({
            where: {
                id_user: data[0]
            },
            attributes: { exclude: ['id_user']},
        })]
        return id_chats
    }
}

module.exports=new ChatService()

