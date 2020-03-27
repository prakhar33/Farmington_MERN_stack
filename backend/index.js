const express=require('express')
const cors=require('cors')
require('./src/db/mongoose')
const User=require('./src/models/users')
const Subsidy=require('./src/models/subsidy')
// const Task=require('./models/task')
// const userrouter=require('./routers/user')
// const taskrouter=require('./routers/task')


const app=express()

const port=process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.post('/signup',async(req,res)=>{
    const user =new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

app.post('/login',async(req,res)=>{
    try{
    const user=await User.find({email:req.body.email,password:req.body.password})
        if(!user[0]){
            // return res.status(404).send('Error logging in')
            console.log('Error logging in')
        }
        console.log(user[0])
    }catch(e){
        res.status(500).send()
    }
})

app.post('/subsidy',async(req,res)=>{
    const subsidy =new Subsidy(req.body)
    try{
        await subsidy.save()
        res.status(201).send(subsidy)
    }catch(e){
        res.status(400).send(e)
    }
})

app.listen(port,()=>{
    console.log('Server is running on port '+port)
})
