/**
 * Class represents an commission plan.
 * @class
 */
export class CommissionPlan {
    /**
     * @constructor
     * @param {string} planId - The id of this plan
     */
    constructor(planId = "") {
        this.planId = planId;
        this.tierRate = [];
    }

    /**
     * Adds a tier rate to this commission plan.
     * @param {number} tierRate - The tier rate to be added
     * @returns {CommissionPlan} Reference to this commission plan.
     */
    addTierRate(tierRate = 0) {
        this.tierRate.push(tierRate);
        return this;
    }
}