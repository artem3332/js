const Router = require('express')
const chatController=require('../controllers/chat.controller')

const router = new Router()

router.post('/add',chatController.createChat)
router.get('/get',chatController.allChatUser)


module.exports=router