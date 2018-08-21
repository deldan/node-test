// requiereds
const fs = require('fs');
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base ${base} no es un número`);
            return;
        }
        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index}\n`;
        }

        resolve(data);
    });
}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base ${base} no es un número`);
            return;
        }
        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index}\n`;
        }

        fs.writeFile(`./tabla/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}