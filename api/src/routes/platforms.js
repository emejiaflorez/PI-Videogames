const { Router } = require('express');
const router = Router();

const { Get_Platforms} = require('../functions/fn_platforms')
router.get("/", Get_Platforms)

module.exports = router;