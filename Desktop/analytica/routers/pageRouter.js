const express = require('express');
const indexController = require('../controller/indexController');
const clientsController = require('../controller/clientsController');
const purchaseController = require('../controller/purchaseController');
const salesController = require('../controller/salesController');
const paymentsController = require('../controller/paymentsController');
const api = express.Router();

api.get('/',indexController.getIndex);
api.get('/clients',clientsController.getClients);
api.get('/purchase',purchaseController.getPurchase);
api.get('/sales',salesController.getSales);
api.get('/payments',paymentsController.getPayments);
api.get('/addClients',clientsController.addClients);
api.get('/:id/delete',clientsController.deleteClients);
api.get('/updateClients',clientsController.updateClients);
api.get('/:id/transactions',clientsController.clientsTransactions);
api.get('/allClients',clientsController.allClients);
api.get('/allClients/:id',clientsController.clientPage);


// post calls 

api.post('/addClients',clientsController.addClients2Db);

module.exports = api;