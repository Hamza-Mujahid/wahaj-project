const  express =require('express');
const adminLogin = require('../controller/admin');

const router = express.Router()

router.post('/', adminLogin.adminLogin)

router.get('/', adminLogin.adminGetLogin)

router.put('/', adminLogin.adminUpdateLogin)

// router.put('/', adminLogin.adminUpdateLogin)

module.exports = router