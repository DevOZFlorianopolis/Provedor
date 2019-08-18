const Plan = require('../db/models/planData')
const Provider = require('../db/models/providerData')

module.exports = {
    async createPlan(req, res) {
        var body = req.body;

        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a plan',
            })
        }

        const plan = new Plan(body);

        if (!plan) {
            return res.status(400).json({success: false, error: err})
        }

        plan.save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: plan._id,
                    message: 'Plan created!',
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'Plan not created!',
                })
            })
    },

    async updatePlan(req, res) {
        const body = req.body;

        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a body to update',
            })
        }

        Plan.findOne({_id: req.params.id}, (err, plan) => {
            if (err) {
                return res.status(404).json({
                    err,
                    message: 'Plan not found!',
                })
            }
            plan.name = body.name
            plan.time = body.time
            plan.rating = body.rating
            plan
                .save()
                .then(() => {
                    return res.status(200).json({
                        success: true,
                        id: plan._id,
                        message: 'Plan updated!',
                    })
                })
                .catch(error => {
                    return res.status(404).json({
                        error,
                        message: 'Plan not updated!',
                    })
                })
        })
    },

    async deletePlan(req, res) {
        await Plan.findOneAndDelete({_id: req.params.id}, (err, plan) => {
            if (err) {
                return res.status(400).json({success: false, error: err})
            }

            if (!plan) {
                return res
                    .status(404)
                    .json({success: false, error: `Plan not found`})
            }

            return res.status(200).json({success: true, data: plan})
        }).catch(err => console.log(err))
    },

    async getPlanById(req, res) {
        await Plan.findOne({_id: req.params.id}, (err, plan) => {
            if (err) {
                return res.status(400).json({success: false, error: err})
            }

            return res.status(200).json({success: true, data: plan})
        }).catch(err => console.log(err))
    },

      getPlans(req, res) {
            Plan.find({}, (err, plans) => {
            if (err) {
                return res.status(400).json({success: false, error: err})
            }
            if (!plans.length) {
                return res
                    .status(404)
                    .json({success: false, error: `Plan not found`})
            }
            return res.status(200).json({success: true, data: plans})
        }).catch(err => console.log(err));
    }


}
