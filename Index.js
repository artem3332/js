const express = require('express')
const userRouter=require('./routes/UserRoutes')
const chatRouter=require('./routes/ChatRoutes')
const messageRouter=require('./routes/MessageRoutes')

const PORT = process.env.PORT|| 9000

const app=express()

app.use(express.json())
app.use('/users',userRouter)
app.use('/chats',chatRouter)
app.use('/messages',messageRouter)


app.listen(PORT,()=>console.log('server started on port',PORT))
