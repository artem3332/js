const Router = require('express')
const userController=require('../controllers/UserController')


const router = new Router()

router.post('/add',userController.createUser)

module.exports=router