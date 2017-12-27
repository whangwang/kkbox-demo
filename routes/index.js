var express = require('express');
var request = require("request");
var http = require("https");


module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });
    app.post('/ajax_search', function(req, res, next) {
        var bodys;
        console.dir('search');
        var options = {
          "method": "GET",
          "hostname": "api.kkbox.com",
          "port": null,
          "path": "/v1.1/search?q=Justin&nbsp;Bieber&type=track&territory=TW&offset=0&limit=10" ,
          "headers": {
            "accept": "application/json",
            "authorization": "Bearer 1KTq6xTBcZovkrFrB2+JUA=="
          }
        };
        var bodys;
        var req = http.request(options, function (ress) {
          var chunks = [];

          ress.on("data", function (chunk) {
            chunks.push(chunk);
          });

          ress.on("end", function () {
            var body = Buffer.concat(chunks);
            bodys = JSON.parse(body);
          /*  res.render('pages/show',{
                body: bodys
            }) */
            res.json({
              msg: 'success',
              data: bodys
            });
            //bodys = body;
            console.dir(bodys);
          });
        });
    /*    console.dir(bodys); */
        req.end();
    });
    app.post('/ajax_search_album', function(req, res, next) {
        var bodys;
        console.dir('search');
        var options = {
          "method": "GET",
          "hostname": "api.kkbox.com",
          "port": null,
          "path": "/v1.1/albums/Stp6OhOOyDQXwjFVtX/tracks?territory=TW&offset=0&limit=10" ,
          "headers": {
            "accept": "application/json",
            "authorization": "Bearer 1KTq6xTBcZovkrFrB2+JUA=="
          }
        };
        var bodys;
        var req = http.request(options, function (ress) {
          var chunks = [];

          ress.on("data", function (chunk) {
            chunks.push(chunk);
          });

          ress.on("end", function () {
            var body = Buffer.concat(chunks);
            bodys = JSON.parse(body);
          /*  res.render('pages/show',{
                body: bodys
            }) */
            res.json({
              msg: 'success',
              data: bodys
            });
            //bodys = body;
            console.dir(bodys);
          });
        });
    /*    console.dir(bodys); */
        req.end();
    });
};
