const Router = require('express')
const messageController=require('../controllers/message.controller')

const router = new Router()

router.post('/message',messageController.createMessage)

module.exports=router