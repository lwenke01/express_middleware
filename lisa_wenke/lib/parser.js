'use strict';

var bParser = (req, res, next)=>{
  req.on('data', (data)=>{
    try {
      var parsed = JSON.parse(data);
      req.body = parsed;
      next();
    }
    catch(err){
      res.writeHead(400, {'Content-Type': 'text/html'});
      res.write('not a valid json');
      res.end();
    }
  });
};

exports.bParser = bParser;
