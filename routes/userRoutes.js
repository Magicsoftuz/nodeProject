const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();
router.route('/').get(userController.getUsersAll).post(userController.addUser);
router
  .route('/:id')
  .delete(userController.deleteUser)
  .get(userController.getUserItem)
  .patch(userController.updateUser);

module.exports = router;
