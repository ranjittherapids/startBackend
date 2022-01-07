import  express  from "express";
import router from '../Routes/index.js'
const app=express();
app.use(router)

export default app;