const { Router } = require('express');
const router = Router();

/* Importar todos los routers;
   Ejemplo: const authRouter = require('./auth.js');*/
const videogames = require('./videogames')
const genres     = require('./genres')

/* Configurar los routers
   Ejemplo: router.use('/auth', authRouter); */
router.use("/videogames", videogames )
router.use("/genres", genres )

module.exports = router;
