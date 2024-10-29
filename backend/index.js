const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5173;
require('./models/dbConnection');
const authRouter = require('./routes/authRouter');
const cors = require('cors');

app.use(cors());

app.get('/', (req,res)=>{
    res.send('Hello From Auth Server');
})

app.use('/auth', authRouter);
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})