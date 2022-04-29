const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

router.route('/').get(tourController.getToursAll).post(tourController.addTour);

router
  .route('/:id')
  .delete(tourController.deleteTour)
  .get(tourController.getTourItem)
  .patch(tourController.updateTour);

module.exports = router;
