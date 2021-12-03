import express from 'express';
import  mongoose  from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/registrationRoute';
import cors from 'cors';

const app=express();

const PORT=4000;

//mongo connection
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/registartion',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use(cors());
routes(app);
app.get('/',(req,res)=>
res.send(req.body)

);

app.listen(PORT,()=>
  console.log('sever is running on port ' +PORT)
);

