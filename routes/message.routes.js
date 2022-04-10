const Router = require('express')
const messageController=require('../controllers/message.controller')

const router = new Router()

router.post('/add',messageController.createMessage)
router.get('/get',messageController.allMessageChat)

module.exports=router