const Router = require('express')
const personController=require('../controllers/person.controller')

const router = new Router()

router.post('/person',personController.createPerson)

module.exports=router