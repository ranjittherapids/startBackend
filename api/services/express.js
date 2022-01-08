import  express  from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import router from '../Routes/index.js'
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)
export default app;