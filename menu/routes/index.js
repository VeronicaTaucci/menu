const express = require('express')
const router = express.Router();
const db = require('../models/database')
router.get('/', async(req, res) => {
    try {
        let records = await db.query('SELECT * FROM menuitem')
        res.render('index', {
            menu:records
        })
    } catch (error) {
        // console.log(error)
        res.send(error)
    }
   
})


module.exports = router;
