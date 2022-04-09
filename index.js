const express = require('express')
const userRouter=require('./routes/user.routes')
const chatRouter=require('./routes/chat.routes')
const messageRouter=require('./routes/message.routes')
const PORT = process.env.PORT|| 9000

const app=express()

app.use(express.json())
app.use('/api',userRouter)

app.use(express.json())
app.use('/api',chatRouter)

app.use(express.json())
app.use('/api',messageRouter)


app.listen(PORT,()=>console.log('server started on post ${PORT}'))
