const router = require('express').Router();
const paymentController=require('../controllers/paymentController')
console.log('hit in route')
router.post('/bkash/payment/create',paymentController.payment_create)

module.exports=router