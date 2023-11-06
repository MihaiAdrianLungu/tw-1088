const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const orders = require('./utils/constants');
const app = express()

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 3001;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/orders', function(req, res) {
  res.status(200).json(orders);
})

app.get('/orders/:id', function(req, res) {
  const id = parseInt(req.params.id);
  const foundOrder = orders.find(el => el.id === id);

  if(foundOrder) {
    res.status(200).json(foundOrder);
  } else {
    res.status(404).json({message: 'Order not found'})
  }
})

app.post('/orders', function(req, res) {
  const newOrder = req.body;

  if (newOrder) {
    newOrder.id = orders.length + 1;
    orders.push(newOrder);

    res.status(201).json(newOrder);
  } else {
    res.status(404).json({message: 'Error'})
  }
})

app.put('/orders/:id', function(req, res) {
  const editOrder = req.body;
  const id = parseInt(req.params.id);

  const foundOrderIndex = orders.findIndex(el => el.id === id);

  if (foundOrderIndex !== -1) {
    orders[foundOrderIndex] = {...orders[foundOrderIndex], ...editOrder};

    res.status(200).json(orders[foundOrderIndex]);
  } else {
    res.status(404).json({message: 'Order not found'})
  }
});

app.delete('/orders/:id', function(req, res) {
  const id = parseInt(req.params.id);

  const foundOrderIndex = orders.findIndex(el => el.id === id);

  if(foundOrderIndex !== -1) {
    orders.splice(foundOrderIndex, 1);
    res.status(200).json({message: 'Order deleted'});
  } else {
    res.status(404).json({message: 'Order not found'})
  }
})

app.listen(PORT, function() {
  console.log(`Server started on port: ${PORT}`)
})