'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


//create inline database
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


app.use(bodyParser.json());
var port = process.env.PORT || 3000;
var router = express.Router();

app.use('/api', router);

router.use(function(req,res, next){
  console.log('middleware working');
  next();
});

router.route('/unicorns')
  .post((req, res)=>{
    var unicorn = req.body;
    console.log('GET got hit');
    db.unicorns.push(req.body);
    res.json({
      message: 'a new unicorn has been created',
      status: true,
      data: unicorn
    });
  })
  .get((req, res)=> {
    console.log('GET got hit');
    let unicorn = db.unicorns;
    res.json({
      message: 'unicorn request processed',
      status: true,
      data: unicorn
    });
  });

// router.route('/unicorns/:id')
//     .get((req, res)=>{
//       let unicorn = db.unicorns[0][req.params.id];
//       res.json({
//         message: 'unicorn ID request processed',
//         status: true,
//         data: unicorn
//       });
//     })
//     .put((req, res)=>{
//       for(var i = 0; i < db.unicorns.length; i++){
//         db.unicorns[req.params.id[i]] = req.body;
//       }
//       // let unicornId = req.body;
//       res.json({
//         message: 'unicorn has been updated',
//         status: true,
//         data: db.unicorns[req.params.id[i]]
//       });
//
//     });
//

  // });


app.listen(port);
console.log('magic is happening on ' + port);
