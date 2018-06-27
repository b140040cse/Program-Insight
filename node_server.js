import * as express from 'express'
	
const express = require('express');

const app = express();

app.listen(8000, () => {
  console.log('Server started!');
});

app.route('/api/cats').get((req, res) => {});

app.route('/api/cats').get((req, res) => {
  res.send({
    cats: [{ name: 'lilly' }, { name: 'lucy' }]
  });
});
	