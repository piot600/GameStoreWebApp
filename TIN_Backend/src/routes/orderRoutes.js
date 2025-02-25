const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/orders', orderController.getAllOrders);
router.get('/orders/:id', orderController.getOrderById);
router.post('/ordersadd', orderController.addOrder);
router.put('/ordersupdate/:id', orderController.updateOrder);
router.delete('/orders/delete/:id', orderController.deleteOrder);

module.exports = router;
