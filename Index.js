const express = require('express')
const cron = require('node-cron');
const userRouter=require('./routes/UserRoutes')
const chatRouter=require('./routes/ChatRoutes')
const messageRouter=require('./routes/MessageRoutes')


const PORT = process.env.PORT|| 7000

const app=express()

app.use(express.json())
app.use('/users',userRouter)
app.use('/chats',chatRouter)
app.use('/messages',messageRouter)





cron.schedule('* * * * *', () => {
    console.log('Ежеминутное уведомление');
});


app.listen(PORT,()=>console.log('Сервер запустился на порте',PORT))



