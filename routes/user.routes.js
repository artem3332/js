const Router = require('express')
const userController=require('../controllers/user.controller')

const router = new Router()

router.post('/user',userController.createUsers)

module.exports=router