// server.js
import express from 'express';
import Product from '../src/controllers/Products';
import Sales from '../src/controllers/Sales';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
   return res.status(200).send({ 'message': 'YAY! Congratulations! Your first endpoint is working' });
})

app.listen(3000)
console.log('app running on port ', 3000);



app.post('/api/v1/products', Product.create);
app.get('/api/v1/products', Product.getAll);
app.get('/api/v1/products/:id', Product.getOne);
app.put('/api/v1/products/:id', Product.update);
app.delete('/api/v1/products/:id', Product.delete);

app.post('/api/v1/sales', Sales.create);
app.get('/api/v1/sales', Sales.getAll);
app.get('/api/v1/sales/:id', Sales.getOne);
app.put('/api/v1/sales/:id', Sales.update);
app.delete('/api/v1/sales/:id', Sales.delete);