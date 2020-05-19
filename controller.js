'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan",res)
};

//menampilkan data user
exports.tampiluser = function(req,res){
    connection.query('SELECT * FROM user', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data user berdasarkan id
exports.tampilberdasarkanid = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM user WHERE id_user = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};