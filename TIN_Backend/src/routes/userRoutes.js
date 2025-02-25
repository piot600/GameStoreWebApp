const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.post('/useradd', userController.createUser);
router.put('/userupdate/:id', userController.updateUser);
router.delete('/user/delete/:id', userController.deleteUser);

module.exports = router;
