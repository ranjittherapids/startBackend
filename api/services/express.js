const  express  = require("express")
const cors = require('cors')
const bodyParser =require ("body-parser")
const router = require('../Routes/index.js');
const io = require("./SocketIo.js");
const app=express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)
 module.exports= app;