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

    connection.query('UPDATE user SET nik=?, nama=?, email=? WHERE id_user=?', [nik, nama, email, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
};

//menghapus data berdasarkan id
exports.hapususer = function (req, res) {
    var id = req.body.id_user;
    connection.query('DELETE FROM user WHERE id_user=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil hapus data", res)
            }
        });
};

//menampilkan dealer group
exports.tampilgroupdealer = function (req, res) {
    connection.query('SELECT user.id_user, user.nik, user.nama, user.email, dealer.objek, dealer.merk from pesan JOIN dealer JOIN user WHERE pesan.id_dealer = dealer.id_dealer AND pesan.id_user = user.id_user ORDER BY user.id_user',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.oknested(rows, res)
            }
        });
}