const express = require('express');
const cors = require('cors')
const server = express();

const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const orderRoutes = require('./routes/orderRoutes');

server.use(express.json());
server.use(cors());

server.get('/', function(req, res){
    return res.json("Server is running")
})

server.use(userRoutes);
server.use(gameRoutes);
server.use(orderRoutes);

server.listen(3001,function(){
    console.log('App is working on port 3001');
})


