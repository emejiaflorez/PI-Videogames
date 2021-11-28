const { Router } = require('express');
const router = Router();

/* Importar todos los routers;
   Ejemplo: const authRouter = require('./auth.js');*/
const videos = require('./videogames')
const genres = require('./genres')
const platforms = require('./platforms')

/* Configurar los routers
   Ejemplo: router.use('/auth', authRouter); */
router.use("/videos",    videos )
router.use("/genres",    genres )
router.use("/platforms", platforms)

module.exports = router;
