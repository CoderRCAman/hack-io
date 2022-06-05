const router = require('express').Router()
const userCtrl =require('../controllers/userCtrl')

const {auth} = require('../middleware/auth')






// router.get('/logout',userCtrl.logout) 



router.post('/google_Login', userCtrl.googleLogin)

router.get('/logout',userCtrl.logout) 

router.get('/all_infor',auth, userCtrl.getUsersAllInfor)

router.get('/infor', userCtrl.getUser)

module.exports = router