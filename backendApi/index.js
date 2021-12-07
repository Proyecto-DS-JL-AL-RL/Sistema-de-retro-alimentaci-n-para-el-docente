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
        expires: 3*60*60*1000
    }
}));



//

app.use('/',require('./Router/interaccionRouter'));

app.use('/retAl',require('./Router/retroalimentacionRouter'));
app.use('/login',require('./Router/sessionL'));

app.use('/',require('./Router/gestionRouter'));


//app.use('/gestion', require...);});
//app.use('/retroalimentacion', require...);});
//app.use('/interaccion', require...);});


//Asignando el puerto del server
app.listen(app.get('port'),()=>{
    console.log('Listening on port',app.get('port'));
})

