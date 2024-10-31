const router = require('express').Router();
const paymentController=require('../controllers/paymentController')
const middleware=require('../middleware/middleware')
console.log('hit in route')
router.post('/bkash/payment/create', middleware.bkash_auth,paymentController.payment_create)

module.exports=router