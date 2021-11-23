const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const session = require("express-session");
var cookieParser = require('cookie-parser')
const {mongoose} = require('./database');
const { nextTick } = require('process');
const app = express();

app.set('port', process.env.PORT || 4000);

//Zona De middleware:


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    key: "userKey",
    secret: "102938234756",
    resave: true,
    saveUninitialized: false,
    cookie:{
        expires: 60*60*1000
    }
}));

//

app.use('/',function(req,res,next){
    req.session.xD = {a:'2'};
    console.log(req.cookies);
    console.log(req.session);
    next();
});
app.use('/retAl',require('./Router/retroalimentacionRouter'));
app.use('/login',require('./Router/sessionL'));

//app.use('/gestion', require...);});
//app.use('/retroalimentacion', require...);});
//app.use('/interaccion', require...);});


//Asignando el puerto del server
app.listen(app.get('port'),()=>{
    console.log('Listening on port',app.get('port'));
})

