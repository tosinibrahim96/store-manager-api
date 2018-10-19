'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Products = require('./controllers/Products');

var _Products2 = _interopRequireDefault(_Products);

var _Sales = require('./controllers/Sales');

var _Sales2 = _interopRequireDefault(_Sales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // server.js


app.use(_express2.default.json());

app.get('/', function (req, res) {
   return res.status(200).send({ 'message': 'YAY! Congratulations! Your first endpoint is working' });
});

app.listen(3000);
console.log('app running on port ', 3000);

app.post('/api/v1/products', _Products2.default.create);
app.get('/api/v1/products', _Products2.default.getAll);
app.get('/api/v1/products/:id', _Products2.default.getOne);
app.put('/api/v1/products/:id', _Products2.default.update);
app.delete('/api/v1/products/:id', _Products2.default.delete);

app.post('/api/v1/sales', _Sales2.default.create);
app.get('/api/v1/sales', _Sales2.default.getAll);
app.get('/api/v1/sales/:id', _Sales2.default.getOne);
app.put('/api/v1/sales/:id', _Sales2.default.update);
app.delete('/api/v1/sales/:id', _Sales2.default.delete);