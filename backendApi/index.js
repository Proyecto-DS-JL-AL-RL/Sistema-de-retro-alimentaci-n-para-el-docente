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
        callBack(null, './public')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})

const whitelist = ['http://localhost:4000'];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)

      callback(new Error('Not allowed by CORS'));
  }
}

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
/*
app.get('/getFile/:id', function(req, res) {
    res.send(__dirname)
    res.sendFile(req.params.id, {root:path.join(__dirname+'/archivos')});
});
*/

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use("/static", express.static("public"));
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
        expires: 3*60*60*10000
    }
}));



//

app.use('/',require('./Router/interaccionRouter'));

app.use('/retAl',require('./Router/retroalimentacionRouter'));
app.use('/login',require('./Router/sessionL'));

app.use('/',require('./Router/gestionRouter'));



//Asignando el puerto del server
const server = app.listen(app.get('port'),()=>{
    console.log('Listening on port',app.get('port'));
})

//Socket XD
const SocketIO = require('socket.io');
const io = SocketIO(server);
const Sockets = require('./models/sockets');
new Sockets(io);