

var mongoose = require('./database');
var express = require('express');
var app = express();


//Zona De middleware:




//

var initRetroalimentacion = require('./Router/retroalimentacionRouter');
initRetroalimentacion(app);


//app.use('/gestion', require...);});
//app.use('/retroalimentacion', require...);});
//app.use('/interaccion', require...);});


//Asignando el puerto del server
app.listen(5000);
