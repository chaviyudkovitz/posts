const express = require('express');
const app= express();
const mongoose=require('mongoose');
const dotenv = require('dotenv');
const routerUser = require('./routers/userApi');
const routerPost = require('./routers/postApi');
const cors = require('cors');
dotenv.config();
app.listen(3010);


app.use(cors());

mongoose.connect(process.env.DB_CONNECTION_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
},).catch(err=>{console.log(`db not connected ${err}`)});

mongoose.connection.on('connected',()=>{
  console.log("db connected");
});

app.use(express.json());
app.use('/',routerUser);
app.use('/',routerPost);

module.exports=app;