'use strict';
var express = require('express');
var app = express();
var parser = require('./lib/parser');
var port = process.env.PORT || 5000;



var db = {

  unicorns: [
    {
      id: '001',
      name: 'Franz',
      powers: 'x-ray vision',
      color: 'green'
    },
    {
      id: '002',
      name: 'Luther',
      powers: 'time travel',
      color: 'magenta'
    },
    {
      id: '003',
      name: 'Hertz',
      powers: 'shoots lightening bolts of rainbows',
      color: 'yellow'
    }
  ]

};




app.use('/unicorns',(req, res, next)=>{
  console.log('request hit');
  next();
});

app.post('/unicorns', (req, res)=>{
  parser.bParser(req, res, ()=>{
    var unicorns = db.unicorns;
    unicorns.push(req.body);
    console.log(unicorns);
    res.end();
  });

});


app.listen(port);
console.log('magic is happening on ' + port);
