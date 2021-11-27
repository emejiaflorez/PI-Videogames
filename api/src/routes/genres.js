const { Router } = require('express');
const router = Router();

const { Get_Genres } = require('../functions/fn_genres')
router.get("/", Get_Genres)

module.exports = router;