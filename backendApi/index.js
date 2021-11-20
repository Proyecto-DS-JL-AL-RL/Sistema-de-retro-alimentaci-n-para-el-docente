const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const {mongoose} = require('./database');
const app = express();

app.set('port', process.env.PORT || 4000);

//Zona De middleware:


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//

var initRetroalimentacion = require('./Router/retroalimentacionRouter');
initRetroalimentacion(app);
app.use('/',require('./Router/interaccionRouter'));

//app.use('/gestion', require...);});
//app.use('/retroalimentacion', require...);});
//app.use('/interaccion', require...);});


//Asignando el puerto del server
app.listen(app.get('port'),()=>{
    console.log('Listening on port',app.get('port'));
})

