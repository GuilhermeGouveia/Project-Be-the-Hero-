// Importando modulos e variaveis externas 

const express = require('express');
const routes = express.Router();

const ongcontroller = require('./controllers/ongscontroll');
const incidentscontroll = require('./controllers/incidentcontroll')
const profileongs = require('./controllers/profileongscontroll');
const session = require('./controllers/SessionControll')



//Primeiro metodo de interacao com o backend,no caso um GET RESPONSE
routes.get('/ongs', ongcontroller.index)

//Segundo metodo de interacao com o backend,no caso um POST REQUEST BODY
routes.post('/ongs', ongcontroller.create)
routes.post('/session', session.create)

routes.get('/incidents', incidentscontroll.list)
routes.get('/list_incidents', profileongs.listSpecificOngs)

routes.post('/incidents',incidentscontroll.create);

routes.delete('/incidents/:id',incidentscontroll.delete);
//Exportando a variable routes para usar no index.js
module.exports = routes;