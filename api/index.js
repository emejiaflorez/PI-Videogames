//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Precarga_Genres   } = require('./src/functions/fn_genres');
const { Precarga_PlatForms} = require('./src/functions/fn_platforms');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001 - Servidor Escuchando puerto 3001');
    
  //Precargamos a las Tables_BD: genres, platforms todos desde la API
    console.log('Procesando Precarga de Generos...'); // eslint-disable-line no-console
    const preCarga1 = await Precarga_Genres()
    console.log(preCarga1)
    console.log('Procesando Precarga de Plataformas...'); // eslint-disable-line no-console
    const preCarga2 = await Precarga_PlatForms()
    console.log(preCarga2)
  });
});



