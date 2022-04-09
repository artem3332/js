const Router = require('express')
const chatController=require('../controllers/chat.controller')

const router = new Router()

router.post('/chat',chatController.createChat)

module.exports=router