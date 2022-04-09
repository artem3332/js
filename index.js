const express = require('express')
const personRouter=require('./routes/person.routes')
const chatRouter=require('./routes/chat.routes')
const messageRouter=require('./routes/message.routes')

const PORT = process.env.PORT|| 9000

const app=express()

app.use(express.json())
app.use('/api',personRouter)

app.use(express.json())
app.use('/api',chatRouter)

app.use(express.json())
app.use('/api',messageRouter)

app.use(express.json())
app.get('/api',personRouter)

app.use(express.json())
app.get('/api',messageRouter)

app.listen(PORT,()=>console.log('server started on port',PORT))
