const Router = require('express')
const chatController=require('../controllers/chat.controller')

const router = new Router()

router.post('/chat',chatController.createChat)
router.get('/all_message',chatController.allMessageChat)

module.exports=router