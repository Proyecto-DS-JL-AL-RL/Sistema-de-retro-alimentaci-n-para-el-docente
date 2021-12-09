const express = require('express');
const multer = require('multer');
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
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './archivos')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})

const upload = multer({storage});

app.post('/uploadFile',  upload.single('archivo'), (req, res, next) => {
    const file = req.file;
        if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file.filename);
})

app.get('/getFile/:id', function(req, res) {
    res.send(__dirname)
    res.sendFile(req.params.id, {root:path.join(__dirname+'/archivos')});
});

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

