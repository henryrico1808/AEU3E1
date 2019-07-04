//CONFIGURACION DEL EXPRESS

const bodyParse=require('body-parser');
const express=require('express');
const morgan=require('morgan');
const wagner=require('wagner-core');
const path=require('path');

let app=express();

require('./models/models')(wagner);

app.use(morgan('dev'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

const urlBase="/api/v1/";
const user=require('./routers/user.router')(wagner);//CONTROLAR RUTAS ESPECIFICAS
const brand=require('./routers/brand.router')(wagner);//CONTROLAR RUTAS ESPECIFICAS

app.use(urlBase+'usuarios',user);
app.use(urlBase+'brands',brand);

module.exports=app;