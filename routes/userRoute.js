const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserDetail);
router.post('/', userController.saveUser);
router.put('/:id', userController.updateUserDetail);

module.exports = router;
