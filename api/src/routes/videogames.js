const { Router } = require('express');
const router = Router();

const {Get_Videos, Get_Video_ById, Add_Video} = require('../functions/fn_videos.js')

router.get("/", Get_Videos)        
router.get("/:id", Get_Video_ById) 
router.post("/add", Add_Video)   

module.exports = router;