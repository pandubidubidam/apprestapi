'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan", res)
};

//menampilkan data user
exports.tampiluser = function (req, res) {
    connection.query('SELECT * FROM user', function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data user berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM user WHERE id_user = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data user
exports.tambahuser = function (req, res) {
    var nik = req.body.nik;
    var nama = req.body.nama;
    var email = req.body.email;

    connection.query('INSERT INTO user (nik,nama,email) VALUES(?,?,?)',
        [nik, nama, email],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("berhasil menambahkan data", res)
            }
        });
};

//mengubah data berdasarkan id
exports.ubahuser = function (req, res) {
    var id = req.body.id_user;
    var nik = req.body.nik;
    var nama = req.body.nama;
    var email = req.body.email;

    connection.query('UPDATE user SET nik=?, nama=?, email=? WHERE id_user=?', [nik, nama, email,id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
};