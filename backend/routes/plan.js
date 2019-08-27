const PlanController = require('../controllers/planController')

var router = require('express').Router();

router.post('/plan', PlanController.createPlan)
router.put('/plan/:id', PlanController.updatePlan)
router.delete('/plan/:id', PlanController.deletePlan)
router.get('/plan/:id', PlanController.getPlanById)
router.get('/plans',  PlanController.getPlans);

module.exports = router
