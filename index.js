const express =require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const userRouter=require('./routers/userrouters');

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api',userRouter);
const mongodbUrl = "mongodb+srv://navyabhanothi:Navya%402005@cluster.rap3r.mongodb.net/";
mongoose.connect(mongodbUrl)
.then(()=>{
    console.log('DB connected successfully');
}).catch((er)=>{
    console.log(er)
})

app.listen(7000,()=>{
    console.log('My server running on port 7000');
});

