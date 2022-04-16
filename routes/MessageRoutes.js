const Router = require('express')
const messageController=require('../controllers/MessageController')

const router = new Router()

router.post('/add',messageController.createMessage)
router.get('/get',messageController.allMessageChat)

module.exports=router