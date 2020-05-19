'use strict';

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    };

    res.json(data);
    res.end();
};

//response untuk nested dealer
exports.oknested = function (values, res) {
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item) => {
        //tentukan key group
        if (akumulasikan[item.nama]) {
            //buat variable group nama user
            const group = akumulasikan[item.nama];
            //cek jika isi array adalah objek
            if (Array.isArray(group.objek)) {
                group.objek.push(item.objek);
            } else {
                group.objek = [group.objek, item.objek];
            }
            //cek jika isi array adalah merk
            if (Array.isArray(group.merk)) {
                group.merk.push(item.merk);
            } else {
                group.merk = [group.merk, item.merk];
            }
        } else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status': 200,
        'values': hasil
    };

    res.json(data);
    res.end();
}