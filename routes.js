'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampiluser);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahuser);

    app.route('/ubah')
        .put(jsonku.ubahuser);

    app.route('/hapus')
        .delete(jsonku.hapususer);

    app.route('/tampildealer')
        .get(jsonku.tampilgroupdealer);
}